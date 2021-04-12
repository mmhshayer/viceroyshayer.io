<template>
  <div class="flex flex-col justify-center content-center text-center">
    <div>
      <h1>
        viceroyshayer.github.io
      </h1>
      <div>
        <Menu-Button />
      </div>
      <div>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/showcase">showcase</nuxt-link>
        <nuxt-link to="/blog">blog</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
  /*
  flex flex-col justify-center content-center text-center
  */
</style>
