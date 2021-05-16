<template>
  <div>
    <div ref="main" class="min-h-screen min-w-full top-0 left-0 z-30 fixed" id="mainFrame">
      <div ref="box" @click="clicked()" class="boxShape">
        <img src="https://media.giphy.com/media/f6ytzUt63xVLDDzONe/giphy.gif" alt="fire">
      </div>
    </div>
    <div class="min-h-screen min-w-full top-0 left-0 z-0 fixed grid place-items-center bg-purple-600">
      <div class="leading-8 font-bold">
        <h1 class="text-3xl">I'm</h1>
        <h2 class="text-5xl">Mohammad Mustakim Hassan</h2>
        <p class="text-3xl">Welcome to my Site</p>
        <sub class="text-xl">You got the fire {{ score }} times</sub>
      </div>
    </div>

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
  #mainFrame {
    background-image: none;
  }
  .boxShape {
    width: 2.5rem;
    height: 4rem;
    top: -50px;
    left:  -50px;
    position: relative;
  }
</style>

<!--
created() {
  this.$nextTick(function () {
    this.interval = setInterval(() => {
      this.teleport()
    }, 2000);
  })
},
    background-image: url("~assets/image/blog-1.svg");
-->
