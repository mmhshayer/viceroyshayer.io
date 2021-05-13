<template>
  <div ref="main" class="min-w-full min-h-screen">
    <div ref="box" @click="clicked()" class="boxShape">
      <img src="https://media.giphy.com/media/f6ytzUt63xVLDDzONe/giphy.gif" alt="fire">
    </div>
    <div> Score {{ score }}</div>
  </div>
</template>

<script>
  export default {
    layout () {
      return 'page'
    },
    data() {
      return {
        score: 0,
      }
    },
    created() {
      this.interval = setInterval(() => this.teleport(), 2000);
    },
    beforeDestroy() {
      clearInterval(this.interval)
    },

    methods: {
      teleport() {
        const theBox = this.$refs.box
        theBox.style.left = Math.random() * (this.$refs.main.clientWidth - theBox.clientWidth) + 'px'
        theBox.style.top = Math.random() * (this.$refs.main.clientHeight - theBox.clientHeight) + 'px'
      },
      clicked() {
        this.score++
      }
    }
  }
</script>

<style>
  .boxShape {
    width: 2.5rem;
    height: 4rem;
    top: -50px;
    left:  -50px;
    position: relative;
    z-index: 50;
  }
</style>

