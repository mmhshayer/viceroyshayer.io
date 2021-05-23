<template>
  <body>
    <Menu />
    <div class="
        mx-auto px-4 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl
      ">
      <Nuxt class="cbmh pt-10"/>
      <Global-Footer />
    </div>
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
