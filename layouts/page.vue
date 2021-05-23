<template>
  <body>
    <Menu />
    <Nuxt />
  </body>
</template>

<script>
  export default {
    head () {
      return this.$nuxtI18nHead({ addSeoAttributes: true })
    }
  }
</script>

<style>
</style>
