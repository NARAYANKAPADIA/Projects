<template>
  <div class="container-know">
    <span>Know about us</span>
    <div class="know-us">
      <div class="left-k">
        <img src="../../assets/temple.png" alt="" />
      </div>
      <div class="right-k">
        <span
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          facere et, at nobis necessitatibus officiis nihil dolorum quae
          reprehenderit tenetur natus voluptatum quasi nemo magnam suscipit
          similique dolores excepturi minus! Deserunt veniam ratione,
          praesentium corrupti reprehenderit quis officiis a quidem doloribus
          blanditiis magni molestias, voluptate nam maxime soluta alias, ducimus
          error? Maxime in obcaecati tempora nulla quia quod. Esse, error!
          Beatae alias provident voluptatum blanditiis repudiandae maiores omnis
          labore modi. Eum dignissimos error sapiente! Perspiciatis nisi atque,
          ab a aut ipsum consequuntur! Optio non sit eaque nemo ipsum eius
          sunt.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KnowUsPage",
};
</script>

<style>
.container-know {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.container-know > :nth-child(1) {
  font-size: 1.5rem;
  font-weight: 500;
}

.container-know > .know-us {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.left-k > img {
  height: 700px;
}

.right-k > span {
  font-size: 2rem;
  font-weight: 500;
}

@media screen and (max-width: 900px) {
  .container-know > .know-us {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .container-know > :nth-child(1) {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }

  .left-k > img {
    height: 500px;
  }

  .right-k {
    text-align: center;
    margin: 0 1rem;
  }

  .right-k > span {
    font-size: 1rem;
  }
}
</style>
