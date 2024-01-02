<template>
  <div class="container-review">
    <div class="user-review">
      <span>User Reviews</span>
    </div>
    <ul class="review">
      <li class="review-card">
        <img src="../../assets/myimg.jpeg" alt="" />
        <span
          >"Those sweets were beautifully handcrafted with so much detail, and
          the taste was simple heavenly"</span
        >
        <span>- Narayan Kapadia</span>
        <span>Surat</span>
      </li>
      <li class="review-card">
        <img src="../../assets/myimg.jpeg" alt="" />
        <span
          >"Those sweets were beautifully handcrafted with so much detail, and
          the taste was simple heavenly"</span
        >
        <span>- Narayan Kapadia</span>
        <span>Surat</span>
      </li>
      <li class="review-card">
        <img src="../../assets/myimg.jpeg" alt="" />
        <span
          >"Those sweets were beautifully handcrafted with so much detail, and
          the taste was simple heavenly"</span
        >
        <span>- Narayan Kapadia</span>
        <span>Surat</span>
      </li>
      <li class="review-card">
        <img src="../../assets/myimg.jpeg" alt="" />
        <span
          >"Those sweets were beautifully handcrafted with so much detail, and
          the taste was simple heavenly"</span
        >
        <span>- Narayan Kapadia</span>
        <span>Surat</span>
      </li>
      <li class="review-card">
        <img src="../../assets/myimg.jpeg" alt="" />
        <span
          >"Those sweets were beautifully handcrafted with so much detail, and
          the taste was simple heavenly"</span
        >
        <span>- Narayan Kapadia</span>
        <span>Surat</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReviewPage",
};
</script>

<style>
.container-review {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

.user-review {
  margin-top: 1rem;
}

.user-review > :nth-child(1) {
  font-size: 1.5rem;
  font-weight: 500;
}

.review {
  gap: 1rem;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto;
  overflow-x: scroll;
}

.review-card {
  height: 350px;
  width: 300px;
  border: 2px solid #b1622a;
  display: flex;
  flex-direction: column;
  padding: 3rem;
}

.review-card > img {
  width: 100px;
  border: 2px solid #b1622a;
  border-radius: 50%;
}

@media screen and (max-width: 900px) {
  .user-review {
    margin-bottom: 1rem;
    text-align: center;
  }

  .review {
    margin: 0 1rem;
  }

}
</style>
