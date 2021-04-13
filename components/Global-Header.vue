<template>
  <header class="w-full flex flex-col h-auto">
    <div class="flex flex-row items-center justify-center p-8" id="header-bar" :class="{ 'scrolled': !view.atTopOfPage }">
      <Theme-Switch />
      <nuxt-link to="/" id="header-title">viceroyshayer</nuxt-link>
    </div>
    <Menu-Button />
  </header>
</template>

<script>
  export default {
    data () {
      return {
        view: {
          atTopOfPage: true
        }
      }
    },

    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
      handleScroll(){
        if(window.pageYOffset>0){
          if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
          if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
      }
    }
  }
</script>

<style scoped>
  /*
  apply bg-red-700 at first div to see it in action
  */
  .scrolled {
    @apply p-3;
    @apply shadow-xl;
    border-bottom: 0px;
  }
  #header-title {
    font-family: Typeface;
    font-size: 200%;
  }
  #header-title:hover {
    color: silver;
  }
  #header-bar {
    background: var(--background-color);
    color: var(--primary-color);
  }
</style>
