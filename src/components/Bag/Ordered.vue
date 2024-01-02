<template>
  <div class="container-odered">
    <div class="img1">
      <img src="../../assets/boyimg.png" alt="" />
    </div>
    <div class="img2">
      <img src="../../assets/checkmark.png" alt="" />
      <Span>Congratulations</Span>
      <span>Your Orderd has been placed successfully</span>
    </div>
    <div class="shopping">
      <router-link to="/" class="cs-btn">
        <button>Continue Shopping</button>
      </router-link>
    </div>
  </div>
  <Suggation />
</template>

<script>
import Suggation from "./Suggation.vue";

export default {
  name: "OrderedPage",
  components: {
    Suggation,
  },
};
</script>

<style>
.container-odered {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border: 2px solid #bf9742;
  padding: 1rem;
  gap: 3rem;
}

.container-odered > :nth-child(1) {
  display: flex;
  align-items: flex-start;
}

.container-odered > :nth-child(1) > img {
  width: 300px;
}

.container-odered > :nth-child(2) {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -2rem;
}

.container-odered > :nth-child(2) > img {
  width: 100px;
}

.container-odered > :nth-child(2) > :nth-child(2) {
  font-size: 2rem;
  font-weight: 500;
  color: #b1622a;
}
.container-odered > :nth-child(2) > :nth-child(3) {
  font-size: 1.1rem;
  font-weight: 500;
  color: #b1622a;
}

.container-odered > .shopping {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 3rem;
}

.container-odered > .shopping > .cs-btn > button {
  padding: 0.3rem 1rem;
  background-color: #bf9742;
  color: white;
  border: none;
  border-radius: 5px;
}

@media screen and (max-width: 500px) {
  .container-odered > :nth-child(1) > img {
    width: 200px;
  }

  .container-odered {
    gap: 5rem;
    align-items: center;
  }

  .container-odered > :nth-child(2) {
    text-align: center;
  }
}
</style>
