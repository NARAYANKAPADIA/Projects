<template>
    <div class="container-products">
      <div class="our-products">
        <span>Users also bought this</span>
      </div>
      <ul class="carousel-c">
        <li class="sugg-card">
          <div class="image">
            <img src="../../assets/MotichurLaddu.png" alt="" />
          </div>
          <span>Keser Magas</span>
          <span> Rs.250/kg</span>
          <div class="order">
            <span>Made with purer keser</span>
            <button>Add to cart</button>
          </div>
        </li>
        <li class="sugg-card">
          <div class="image">
            <img src="../../assets/MotichurLaddu.png" alt="" />
          </div>
          <span>Keser Magas</span>
          <span> Rs.250/kg</span>
          <div class="order">
            <span>Made with purer keser</span>
            <button>Add to cart</button>
          </div>
        </li>
        <li class="sugg-card">
          <div class="image">
            <img src="../../assets/MotichurLaddu.png" alt="" />
          </div>
          <span>Keser Magas</span>
          <span> Rs.250/kg</span>
          <div class="order">
            <span>Made with purer keser</span>
            <button>Add to cart</button>
          </div>
        </li>
        <li class="sugg-card">
          <div class="image">
            <img src="../../assets/MotichurLaddu.png" alt="" />
          </div>
          <span>Keser Magas</span>
          <span> Rs.250/kg</span>
          <div class="order">
            <span>Made with purer keser</span>
            <button>Add to cart</button>
          </div>
        </li>
        <li class="sugg-card">
          <div class="image">
            <img src="../../assets/MotichurLaddu.png" alt="" />
          </div>
          <span>Keser Magas</span>
          <span> Rs.250/kg</span>
          <div class="order">
            <span>Made with purer keser</span>
            <button>Add to cart</button>
          </div>
        </li>
        <li class="sugg-card">
          <div class="image">
            <img src="../../assets/MotichurLaddu.png" alt="" />
          </div>
          <span>Keser Magas</span>
          <span> Rs.250/kg</span>
          <div class="order">
            <span>Made with purer keser</span>
            <button>Add to cart</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SuggationPage",
  };
  </script>
  
  <style>
  
  .container-products {
    max-width: 1280px;
    width: 100%;
    margin: 1rem 0;
  }
  
  .carousel-c {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto auto;
    gap: 0.5rem;
    overflow-x: scroll;
  }
  
  .carousel-c .sugg-card {
    list-style: none;
    width: max-content;
    display: flex;
    flex-direction: column;
  }
  
  .sugg-card > :nth-child(2) {
    font-size: 0.8rem;
  }
  
  .sugg-card > :nth-child(3) {
    font-size: 0.8rem;
    color: orange;
  }
  
  .our-products {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .our-products > :nth-child(1) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 170px;
    background-color: #bf9742;
  }
  
  .image > img {
    width: 230px;
    border-radius: 50%;
  }
  
  .product > :nth-child(2) {
    font-size: 0.8rem;
  }
  
  .product > :nth-child(3) {
    font-size: 0.8rem;
    color: orange;
  }
  
  .order {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .order > span {
    font-size: 0.8rem;
  }
  
  .order > button {
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    background-color: #bf9742;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  @media screen and (max-width: 900px) {
    .products {
      grid-template-columns: auto auto;
      width: auto;
    }
  
    .container-products {
      margin-top: 2rem;
    }
  
    .carousel-c {
      gap: 0.5rem;
    }
  
    .sugg-card {
      margin: 1rem;
    }
  
    .image {
    width: 280px;
    height: 180px;
  }
  
  .image > img {
    width: 210px;
    border-radius: 50%;
  }
  
  .our-products {
    justify-content: center;
  }
  
  .our-products > :nth-child(1) {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }
  
  }
  </style>
  