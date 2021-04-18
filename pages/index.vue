<template>
  <div>
    <Carousel />
    <div class="flex flex-col justify-center content-center text-center min-h-screen">
      <div>
        <h1>
          viceroyshayer.github.io
        </h1>
        <div>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <nuxt-link to="/showcase">showcase</nuxt-link>
          <nuxt-link to="/blog">blog</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  export default {
    layout: 'canvas',
  }
</script>

<style>
  /*
  flex flex-col justify-center content-center text-center
  */
</style>
