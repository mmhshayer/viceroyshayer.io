<template>
  <footer>
    <div class="flex flex-col items-center text-gray-500 dark:text-gray-400">
      <div class="flex mb-3 space-x-4">
        <nuxt-link to="/about">About</nuxt-link>
        <span> | </span>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
      <div class="flex mb-2 space-x-2 text-sm ">
        <span>Powered by <a href="https://nuxtjs.org/" rel="noopener" target="_blank">NUXTJS</a></span>
        <span>&middot;</span>
        <span> <a href="https://tailwindcss.com/" rel="noopener" target="_blank">TailwindCSS</a></span>
        <span>&middot;</span>
        <span>Made by <a href="https://github.com/viceroyshayer" rel="noopener" target="_blank">viceroyshayer</a></span>
      </div>
      <div class="mb-8 text-sm">
        <a href="https://github.com/viceroyshayer">
          © 2020 viceroyshayer
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style scoped>
</style>
