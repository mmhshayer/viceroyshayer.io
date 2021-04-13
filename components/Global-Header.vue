<template>
  <header class="w-full flex flex-col justify-center h-auto">
    <div class="flex flex-row justify-center p-8" :class="{ 'scrolled': !view.atTopOfPage }">
      <Theme-Switch />
      <nuxt-link to="/">viceroyshayer</nuxt-link>
    </div>
    <Menu-Button class="alsolute self-center"/>
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
</style>
