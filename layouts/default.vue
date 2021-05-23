<template>
  <body>
    <Menu />
    <div class="
        mx-auto px-4 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl
      ">
      <Nuxt class="cbmh"/>
      <Global-Footer />
    </div>
  </body>
</template>

<script>
  export default {
    head () {
      const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
      return {
        htmlAttrs: {
          myAttribute: 'My Value',
          ...i18nHead.htmlAttrs
        },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My Custom Description'
          },
          ...i18nHead.meta
        ],
      }
    }
  }
</script>

<style>
</style>
