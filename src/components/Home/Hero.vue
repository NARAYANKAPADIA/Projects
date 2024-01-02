<template>
    <div class="container-hero">
      <div class="left-hero">
        <Span>The Best Magas in the town</Span>
        <span>Made with pure ingredients</span>
        <span> price = Rs.250 for 1Kg</span>
        <div class="hero-btn">
          <button>Add to basket</button>
        </div>
      </div>
      <div class="right-hero">
        <img src="../../assets/MotichurLaddu.png" alt="" />
      </div>
    </div>
</template>

<script>

export default {
  name: "HomePage",
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.left-hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.left-hero > :nth-child(1) {
  font-size: 2rem;
  font-weight: bold;
  color: #b1622a;
}

.left-hero > :nth-child(2) {
  font-size: 1.2rem;
  font-weight: 400;
  color: #b1622a;
}

.left-hero > :nth-child(3) {
  font-size: 1.2rem;
  font-weight: 400;
  color: #b1622a;
}

.left-hero > .hero-btn {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.hero-btn > button {
  padding: 0.3rem 1rem;
  background-color: #bf9742;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.right-hero {
  display: flex;
}

.right-hero > img {
  width: 400px;
  border-radius: 50%;
}

@media screen and (max-width: 900px) {
  .container-hero {
    flex-direction: column;
    gap: 2rem;
  }

  .left-hero {
    text-align: center;
  }

  .left-hero > :nth-child(1) {
    font-size: 1.5rem;
  }

  .left-hero > :nth-child(2) {
    font-size: 1rem;
  }

  .left-hero > :nth-child(3) {
    font-size: 1rem;
  }

  .hero-btn {
    justify-content: center;
  }

  .hero-btn > button {
    padding: 0.2 0.8rem;
  }

  .right-hero > img {
  width: 250px;
}
  
}
</style>
