<template>
  <div class="container-p">
    <div class="heading-p">
      <span>My Profile</span>
      <i class="fa-regular fa-pen-to-square"></i>
    </div>
    <div class="profile-input">
      <span>Name</span>
      <div>
        <input type="text" placeholder="Enter your first name" />
        <input type="text" placeholder="Enter your last name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style>
.container-p {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #bf9742;
  border-radius: 5px;
  padding: 1rem 2rem;
}

.heading-p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heading-p > span,
.heading-p > i {
  font-size: 1.8rem;
  font-weight: 500;
  color: #b1622a;
}

.profile-input {
  display: inline-flex;
  flex-direction: column;
  margin: 20px;
}

.profile-input > div {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 950px) {
  .container-p {
    margin: 3rem 1rem 0 0;
  }
}
</style>
