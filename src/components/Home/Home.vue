<template>
<div class="main-container">
    <Hero />
    <Products />
    <Knowus />
    <Review />
</div>
</template>

<script>

import Hero from './Hero.vue'
import Products from './Products.vue'
import Knowus from './Knowus.vue'
import Review from './Review.vue'

export default {
    name: 'HomePage',
    components: {
        Hero,
        Products,
        Knowus,
        Review,
    }
}

</script>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

</style>