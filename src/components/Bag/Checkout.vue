<template>
  <div class="checkout">
    <span>Checkout</span>
    <div class="container-checkout">
      <div class="left-c">
        <span>Shipping To</span>
        <div
          v-for="(address, index) in addresses"
          :key="index"
          class="address-card"
          @click="selectAddress(index)"
          :class="{ selected: selectedAddress === index }"
        >
          <input
            type="radio"
            :id="'addressRadio' + index"
            :name="'add'"
            v-model="selectedAddress"
            :value="index"
          />
          <div class="address">
            <span>{{ address.label }}</span>
            <span>{{ address.phone }}</span>
            <span>{{ address.street }}</span>
          </div>
          <i class="fa-solid fa-pen"></i>
        </div>
        <div class="payment">
          <Span>Payment Option</Span>
          <div class="option">
            <div>
              <img src="../../assets/mastercard.png" alt="" />
            </div>
            <div>
              <span>Credit Card/Debit Card</span>
              <input type="radio" name="radio" />
            </div>
          </div>
          <div class="option">
            <div>
              <img src="../../assets/applepay.png" alt="" style="width: 30px" />
            </div>
            <div>
              <span>Apple Pay</span>
              <input type="radio" name="radio" />
            </div>
          </div>
          <div class="option">
            <div>
              <img src="../../assets/bhimupi.png" alt="" style="width: 30px" />
            </div>
            <div>
              <span>UPI</span>
              <input type="radio" name="radio" />
            </div>
          </div>
          <div class="option">
            <div>
              <img src="../../assets/cash.png" alt="" style="width: 30px" />
            </div>
            <div>
              <span>Pay On Deilvery</span>
              <input type="radio" name="radio" />
            </div>
          </div>
        </div>
      </div>
      <div class="vl"></div>
      <div class="right-c">
        <div>
          <span>Promo Code</span>
          <div>
            <input type="text" name="" placeholder="Promo Code" />
            <button>Apply</button>
          </div>
        </div>
        <div>
          <span>order summary</span>
          <div class="calcu">
            <span>Items:</span>
            <span>Rs.875</span>
          </div>
          <div class="calcu"><span>CGST:</span><span>Rs.20</span></div>
          <div class="calcu"><span>SGST:</span><span>Rs.20</span></div>
          <hr />
          <div class="calcu"><span>Total:</span><span>Rs.915</span></div>
          <div class="calcu"><span>Delivery:</span><span>Rs.45</span></div>
          <hr />
          <div class="calcu"><span>Total:</span><span>Rs.950</span></div>
          <div class="calcu">
            <router-link to="/ordered" class="payment-btn">
              <button>Make Payment</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Suggation />
</template>

<script>
import Suggation from "./Suggation.vue";

export default {
  name: "CheckoutPage",
  components: {
    Suggation,
  },
  data() {
    return {
      addresses: [
        {
          label: "Home Address",
          phone: "(269) 444-6853",
          street: "Road Number 5649 Akali",
        },
        {
          label: "Office Address",
          phone: "(269) 444-6853",
          street: "Road Number 5649 Akali",
        },
      ],
      selectedAddress: null,
    };
  },
  methods: {
    selectAddress(index) {
      this.selectedAddress = index;
    },
  },
};
</script>

<style>
.checkout {
  display: flex;
  flex-direction: column;
  border: 2px solid #bf9742;
  border-radius: 5px;
  padding: 1rem;
}

.checkout > :nth-child(1) {
  font-size: 1.7rem;
  font-weight: 500;
  color: #b1622a;
  margin-bottom: 1.5rem;
}

.container-shopping {
  display: flex;
}

.container-checkout {
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-c {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
}

.left-c > :nth-child(1) {
  font-size: 1.2rem;
  font-weight: 500;
}

.right-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 1rem;
  gap: 2rem;
}

.address-card {
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 5px;
  width: fit-content;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  cursor: pointer;
}

.address-card > :nth-child(2) > :nth-child(1) {
  font-size: 1.1rem;
  font-weight: 500;
}

.address-card > :nth-child(2) > :nth-child(2),
.address-card > :nth-child(2) > :nth-child(3) {
  font-size: 0.8rem;
  font-weight: 500;
  color: gray;
}

.address-card > :nth-child(3) {
  cursor: pointer;
}

.address-card > input:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: white;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

.address-card > input:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #bf9742;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

.address-card.selected {
  border: 2px solid #bf9742;
}

.address-card > input:checked {
  border: 2px solid #bf9742;
}

.address-card .address {
  display: flex;
  flex-direction: column;
}

.payment {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment > :first-child {
  font-size: 1.2rem;
  font-weight: 500;
}

.option {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.option > :nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(210, 207, 207);
  width: 40px;
  height: 40px;
  border-radius: 15px;
}

.option > div > img {
  width: 60px;
}

.option :last-child {
  accent-color: rgb(191, 151, 66);
}

.option > :nth-child(2) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
}

.option > :nth-child(2) > input:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: rgb(188, 179, 179);
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
  cursor: pointer;
}

.option > :nth-child(2) > input:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #bf9742;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}

.vl {
  border-radius: 50%;
}

.right-c > :nth-child(1) > :nth-child(1) {
  font-size: 1.2rem;
  font-weight: 500;
}

.right-c > :nth-child(1) > div {
  display: flex;
  gap: 1rem;
}

.right-c > :nth-child(1) > div > input {
  padding: 0 1rem;
  outline: none;
  border: 2px solid #bf9742;
  font-size: 1rem;
  border-radius: 5px;
}

.right-c > :nth-child(1) > div > button {
  background-color: #bf9742;
  border: none;
  outline: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.right-c > :nth-child(2) {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 2rem;
}

.right-c > :nth-child(2) > span {
  font-size: 1.5rem;
  font-weight: 500;
}

.right-c > :nth-child(2) > .calcu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-c > :nth-child(2) > .calcu > .payment-btn > button {
  background-color: #bf9742;
  color: white;
  outline: none;
  border: none;
  margin-top: 1rem;
  align-self: center;
  padding: 0.3rem 3rem;
  border-radius: 5px;
}

@media screen and (max-width: 900px) {
  .checkout {
    margin: 1rem;
    border: none;
  }

  .container-checkout {
    flex-direction: column;
    gap: 2rem;
  }

  .left-c {
    align-items: center;
  }

  .payment {
    margin-top: 1rem;
    align-items: center;
  }

  .payment > .option {
    gap: 0.2rem;
  }

  .payment > .option > :last-child {
    padding: 0.5rem;
    justify-content: space-between;
  }

  .right-c {
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .right-c > :nth-child(2) {
    padding-left: 0;
  }

  .right-c > :nth-child(1) > div {
    flex-direction: column;
  }

  .right-c > :nth-child(1) > span {
    margin-bottom: 1rem;
  }

  .right-c > :nth-child(1) > div > input {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
