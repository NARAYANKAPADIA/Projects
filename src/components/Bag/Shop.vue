<template>
  <div class="container-s">
    <div class="container-shopping">
      <span>Shopping Bag</span>
      <div class="shopping-bag">
        <div class="left-s">
          <div class="s-card">
            <img src="../../assets/MotichurLaddu.png" alt="" />
            <div class="details">
              <p>Kesar Magas <span>1kg</span></p>
              <span> Made with pure kesar</span>
              <span> Rs.250</span>
            </div>
            <div class="delete">
              <i class="fa-solid fa-trash-can"></i>
              <div class="qty">
                <i class="fa-regular fa-square-plus"></i>
                <span>2</span>
                <i class="fa-regular fa-square-minus"></i>
              </div>
            </div>
          </div>
          <div class="s-card">
            <img src="../../assets/MotichurLaddu.png" alt="" />
            <div class="details">
              <p>Kesar Magas <span>1kg</span></p>
              <span> Made with pure kesar</span>
              <span> Rs.250</span>
            </div>
            <div class="delete">
              <i class="fa-solid fa-trash-can"></i>
              <div class="qty">
                <i class="fa-regular fa-square-plus"></i>
                <span>2</span>
                <i class="fa-regular fa-square-minus"></i>
              </div>
            </div>
          </div>
          <div class="s-card">
            <img src="../../assets/MotichurLaddu.png" alt="" />
            <div class="details">
              <p>Kesar Magas <span>1kg</span></p>
              <span> Made with pure kesar</span>
              <span> Rs.250</span>
            </div>
            <div class="delete">
              <i class="fa-solid fa-trash-can"></i>
              <div class="qty">
                <i class="fa-regular fa-square-plus"></i>
                <span>2</span>
                <i class="fa-regular fa-square-minus"></i>
              </div>
            </div>
          </div>
          <div class="s-card">
            <img src="../../assets/MotichurLaddu.png" alt="" />
            <div class="details">
              <p>Kesar Magas <span>1kg</span></p>
              <span> Made with pure kesar</span>
              <span> Rs.250</span>
            </div>
            <div class="delete">
              <i class="fa-solid fa-trash-can"></i>
              <div class="qty">
                <i class="fa-regular fa-square-plus"></i>
                <span>2</span>
                <i class="fa-regular fa-square-minus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="vl"></div>
        <div class="right-s">
          <img src="../../assets/checkout.png" alt="" />
          <div class="summary">
            <span>item summary</span>
            <div class="items">
              <span>items</span>
              <span>Rs.875</span>
            </div>
            <hr />
            <router-link to="/checkout" class="checkout-btn-link">
              <button>Proceed to checkout</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Suggation />
  </div>
</template>

<script>
import Suggation from "./Suggation.vue";

export default {
  name: "ShopPage",
  components: {
    Suggation,
  },
};
</script>

<style>
.container-shopping {
  display: flex;
  flex-direction: column;
  border: 2px solid #bf9742;
  border-radius: 5px;
  margin: 1rem;
}

.container-shopping > span {
  color: #b1622a;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 1rem;
}

.shopping-bag {
  display: flex;
}

.left-s {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  height: 450px;
  overflow-y: scroll;
}

.right-s {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.vl {
  width: 0;
  border: 2px solid #bf9742;
  height: 430px;
  border-radius: 50%;
}

.s-card {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.s-card img {
  width: 150px;
}

.s-card > .details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.s-card > .details > p > span {
  font-size: 0.85rem;
  color: orange;
}

.s-card > .details > :nth-child(1) {
  font-size: 1.1rem;
}

.s-card > .details > :nth-child(2) {
  font-size: 1.1rem;
}

.s-card > .details > :nth-child(3) {
  font-size: 1.1rem;
  color: orange;
}

.s-card > .delete {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

.s-card > .delete > i {
  font-size: 1.1rem;
  cursor: pointer;
}

.s-card > .delete > .qty {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
}

.s-card > .delete > .qty > i {
  font-size: 1.1rem;
  cursor: pointer;
  color: black;
}

.s-card > .delete > .qty > span {
  font-size: 1.1rem;
  cursor: pointer;
  color: black;
}

.right-s > img {
  width: 500px;
}

.right-s > .summary {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 2px solid #bf9742;
  border-radius: 5px;
  padding: 1rem 2rem;
}

.right-s > .summary > :nth-child(1) {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
}

.right-s > .summary > :nth-child(2) {
  display: flex;
  justify-content: space-between;
}

.checkout-btn-link {
  align-self: center;
}

.right-s > .summary > .checkout-btn-link > button {
  background-color: #bf9742;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 0.2rem 1rem;
  cursor: pointer;
  align-self: center;
}

@media screen and (max-width: 900px) {
  .container-s {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-shopping {
    width: fit-content;
    border: none;
  }
  .shopping-bag {
    display: flex;
    flex-direction: column;
  }

  .vl {
    width: calc(100% - 48px);
    height: 0;
    border-radius: 50%;
    align-self: center;
  }

  .s-card {
    width: fit-content;
    margin: 1rem;
    gap: 0.5rem;
    flex-direction: column;
  }

  .s-card img {
    width: 150px;
  }

  .s-card > .delete {
    flex-direction: row;
  }

  .right-s {
    margin-bottom: 1rem;
  }

  .right-s > img {
    width: 350px;
  }
}

@media screen and (max-width: 400px){
    .right-s > img {
    width: 270px;
  }
}
</style>
