<template>
  <div>
    <!-- bouncing game object on full screen div for refference -->
    <div ref="main" class="min-h-screen min-w-full top-0 left-0 z-30 fixed" id="mainFrame">
      <keep-alive>
        <div ref="box" class="boxShape">
          <img ref="img" :src="imgSrc" alt="fire" @click="clicked" class="animate-bounce w-auto h-auto">
        </div>
      </keep-alive>
    </div>
    <!-- self introduction on the center of a full screen div for refference -->
    <div class="min-h-screen min-w-full top-0 left-0 z-20 fixed grid place-items-center">
      <div class="pl-8 leading-8 font-bold">
        <h1 class="text-3xl">{{ $t('itim') }}</h1>
        <h2 class="text-4xl">{{ $t('thename') }}</h2>
        <p class="text-3xl">{{ $t('itwlcm') }}</p>
        <sub class="text-xl">{{ $t('itscore') }}: {{ score }}</sub>
      </div>
    </div>

    <div class="min-h-screen min-w-full top-0 left-0 z-10 fixed grid place-items-center">
      <div class="sky-container">
        <div v-for="i in 20" :key="i" class="star"></div>
      </div>
    </div>

    <!-- stars background -->
    <div class="h-screen w-full top-0 left-0 z-0 fixed">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
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
        imgClicked: false,
        bird: require('~/assets/image/webp/bird.webp'),
        drone: require('~/assets/image/webp/drone.webp')
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
        this.imgClicked = false
      },
      clicked() {
        if (this.imgClicked != true) {
          this.score++;
          this.imgClicked = true;
        } else {
          this.score--
        }
      }
    },
    computed: {
      imgSrc: function () {
        while (this.interval < 2000) {
          if (this.imgClicked == true) {
            return this.bird
          } else {
            return this.drone
          }
        }
      }
    },
    head () {
      return {
        title: 'Welcome'
      }
    }
  }
</script>

<style scoped>
  #mainFrame {
    background-image: none;
    cursor: crosshair;
  }
  .boxShape {
    width: 2.5rem;
    height: 4rem;
    top: -50px;
    left:  -50px;
    position: relative;
  }
</style>
