<template>
  <header class="flex flex-row items-center justify-center" :class="{ 'scrolled': !view.atTopOfPage }">
    <Theme-Switch />
    <nuxt-link to="/">viceroyshayer</nuxt-link>
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
    @apply shadow-xl;
    border-bottom: 0px;
  }
</style>
