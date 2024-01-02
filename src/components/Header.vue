<template>
  <div class="container-h">
    <h1>Magaswala</h1>
    <div class="search-h">
      <input type="text" placeholder="Search Food Items" />
      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    </div>
    <div v-if="menuOpened && mobile">
      <div @click="setMenuOpened(false)" class="menu-bars x-mark">
        <i class="fa-solid fa-xmark close-btn"></i>
      </div>
    </div>
    <div v-if="!menuOpened && mobile">
      <div @click="setMenuOpened(true)" class="menu-bars">
        <i class="fa-solid fa-bars menu-btn"></i>
      </div>
    </div>
    <ul v-else class="menu">
      <li @click="setMenuOpened(false)">
        <router-link to="/" class="link">
          <i class="fa-solid fa-house"></i>
          <a href="" class="inlink">Home</a>
        </router-link>
      </li>
      <li @click="setMenuOpened(false)">
        <router-link to="/bag" class="link">
          <i class="fa-solid fa-bag-shopping"></i>
          <a href="" class="inlink">Bag</a>
        </router-link>
      </li>
      <li @click="setMenuOpened(false)">
        <router-link to="/favoutites" class="link">
          <i class="fa-regular fa-heart"></i>
          <a href="" class="inlink">Favourits</a>
        </router-link>
      </li>
      <li @click="setMenuOpened(false)">
        <router-link to="/profile" class="link">
          <i class="fa-regular fa-user"></i>
          <a href="" class="inlink">Profile</a>
        </router-link>
      </li>
      <li @click="setMenuOpened(false)">
        <router-link to="/login" class="link">
          <i class="fa-solid fa-power-off"></i>
          <a href="" class="inlink">Logout</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
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
.container-h {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #bf9742;
  margin-bottom: 10px;
}

.menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  font-size: 1.2rem;
  position: relative;
}

.menu > li > .link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
}

.menu > li:hover i,
.menu > li:hover .inlink {
  color: #bf9742;
}

.container-h h1 {
  font-size: 3rem;
  font-family: "Lobster", sans-serif;
  color: #bf9742;
  transition: all 0.8s ease-in-out;
}

.container-h .search-h {
  position: relative;
  background-color: gray;
  border-radius: 5px;
}

.search-h > input {
  width: 100%;
  display: block;
  padding: 0.8rem 4rem 0.8rem 1rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid #bf9742;
  font-size: 1.2rem;
  transition: all 3s ease;
}

.search-h > i {
  position: absolute;
  top: 35%;
  left: 85%;
  cursor: pointer;
  font-size: 1.2rem;
}

.menu > li > .link {
  text-decoration: none;
  color: black;
}

.inlink {
  text-decoration: none;
  color: black;
}

.menu-bars i {
  color: black;
  cursor: pointer;
}

@media screen and (max-width: 950px) {
  .container-h {
    margin: 0 !important;
  }

  .container-h > :nth-child(3) {
    top: 3rem;
    right: 1rem;
    z-index: 99;
  }

  .menu li {
    font-size: 1.5rem;
    flex-direction: row;
    gap: 10px;
    font-size: 0.7rem;
  }

  .menu {
    position: absolute;
    right: 10%;
    top: 7%;
    border: 1px solid #bf9742;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1rem;
  }

  .container-h {
    justify-content: space-evenly;
    gap: 10px;
    padding: 10px;
    margin: 0 10px;
  }

  .container-h h1 {
    position: relative;
  }

  .search-h > input {
    padding: 0.3rem 1.3rem 0.3rem 0.1rem;
    font-size: 0.7rem;
    transition: all 0.8s ease-in-out;
  }

  .search-h > i {
    padding: 0;
    font-size: 0.7rem;
    background-color: transparent;
  }
}

@media screen and (max-width: 600px) {
  .container-h h1 {
    position: relative;
    font-size: 1.2rem;
    transition: all 0.8s ease-in-out;
  }
}
</style>
