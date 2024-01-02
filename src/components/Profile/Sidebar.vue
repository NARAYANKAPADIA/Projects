<template>
<div v-if="menuOpened && mobile">
    <div @click="setMenuOpened(false)" class="side-menu-bars">
        <i class="fa-solid fa-xmark close-btn"></i>
    </div>
</div>
<div v-if="!menuOpened && mobile">
    <div @click="setMenuOpened(true)" class="side-menu-bars">
        <i class="fa-solid fa-bars menu-btn"></i>
    </div>
</div>
<div v-else class="container-s">
    <img src="../assets/myimg.jpeg" alt="" />
    <div class="name-mail">
        <span>Narayan Kapadia</span>
        <span>narayan@gmail.com</span>
    </div>
    <ul class="sidebar-options">
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-regular fa-user"></i>Profile</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-solid fa-bag-shopping"></i>Order</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-solid fa-key"></i>Reset password</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-solid fa-credit-card"></i>Payment Method</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-solid fa-address-card"></i>Manage Address</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-regular fa-handshake"></i>Help and Support</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-regular fa-newspaper"></i>Terms And Condition</router-link>
        </li>
        <li @click="setMenuOpened(false)">
            <router-link to="/profile" class="options-container"><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "SideBar",
    data() {
        return {
            mobile: window.innerWidth <= 950,
            menuOpened: false,
        };
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        handleResize() {
            this.mobile = window.innerWidth <= 950;
        },
        setMenuOpened(value) {
            this.menuOpened = value;
        },
    },
};
</script>

<style>
.container-s {
    min-width: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #bf9742;
    border-radius: 5px;
    padding: 1rem;
    position: relative;
    transition: all 300ms ease-in;
}

.container-s>img {
    width: 100px;
    border-radius: 50%;
    margin: 0;
}

.container-s .name-mail {
    display: flex;
    flex-direction: column;
    margin: 0;
}

.container-s .name-mail> :nth-child(1) {
    font-size: 1.1rem;
    font-weight: 500;
}

.container-s .name-mail> :nth-child(2) {
    font-size: 0.85rem;
    font-weight: 300;
}

.container-s>ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
}

.sidebar-options > li > .options-container  {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    text-decoration: none;
    color: black;
}

.sidebar-options > li > .options-container:hover {
    cursor: pointer;
    color: #bf9742;
}

.side-menu-bars>i {
    position: absolute;
    left: 10%;
    margin-top: 10px;
}

@media screen and (max-width: 950px) {
    .container-s {
        position: absolute;
        top: 16%;
        left: 2%;
        border: 1px solid #bf9742;
        flex-direction: column;
        background-color: white;
        padding: 1rem;
        border-radius: 5px;
        font-size: 1rem;
        z-index: 999;
        transition: all 300ms linear;
    }
}
</style>
