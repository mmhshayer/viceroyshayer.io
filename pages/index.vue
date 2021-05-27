<template>
  <div>
    <!-- bouncing game object on full screen div for refference -->
    <div ref="main" class="min-h-screen min-w-full top-0 left-0 z-20 fixed" id="mainFrame">
      <keep-alive>
        <div ref="box" class="boxShape">
          <img ref="img" :src="imgSrc" alt="fire" @click="clicked" class="animate-bounce w-auto h-auto">
        </div>
      </keep-alive>
    </div>
    <!-- self introduction on the center of a full screen div for refference -->
    <div class="min-h-screen min-w-full top-0 left-0 z-10 fixed grid place-items-center">
      <div class="pl-8 leading-8 font-bold">
        <h1 class="text-3xl">{{ $t('atim') }}</h1>
        <h2 class="text-4xl">{{ $t('thename') }}</h2>
        <p class="text-3xl">{{ $t('atwlcm') }}</p>
        <sub class="text-xl">{{ $t('atscore') }}: {{ score }}</sub>
      </div>
    </div>

    <div class="min-h-screen min-w-full top-0 left-0 z-0 fixed grid place-items-center">
      <div class="sky-container">
        <div v-for="i in 20" :key="i" class="star"></div>
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

  .sky-container {
    width: 50%;
    height: 50%;
    transform: rotateZ(45deg);
  }

  .star {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
    filter: drop-shadow(0 0 6px #699bff);
    animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
  }

  .star::before, .star::after {
    position: absolute;
    content: '';
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);
    animation: shining 3000ms ease-in-out infinite;
  }

  .star::after {
    transform: translateX(50%) rotateZ(-45deg);
  }

  .star:nth-child(1) {
    top: calc(50% - 200px);
    left: calc(50% - 300px);
    animation-delay: 650ms;
  }
  .star:nth-child(1)::before, .star:nth-child(1)::after {
    animation-delay: 650ms;
  }

  .star:nth-child(2) {
    top: calc(50% - -50px);
    left: calc(50% - 190px);
    animation-delay: 150ms;
  }
  .star:nth-child(2)::before, .star:nth-child(2)::after {
    animation-delay: 150ms;
  }

  .star:nth-child(3) {
    top: calc(50% - -90px);
    left: calc(50% - 200px);
    animation-delay: 1600ms;
  }
  .star:nth-child(3)::before, .star:nth-child(3)::after {
    animation-delay: 1600ms;
  }

  .star:nth-child(4) {
    top: calc(50% - 50px);
    left: calc(50% - 250px);
    animation-delay: 4700ms;
  }
  .star:nth-child(4)::before, .star:nth-child(4)::after {
    animation-delay: 4700ms;
  }

  .star:nth-child(5) {
    top: calc(50% - -190px);
    left: calc(50% - 200px);
    animation-delay: 2100ms;
  }
  .star:nth-child(5)::before, .star:nth-child(5)::after {
    animation-delay: 2100ms;
  }




  /* Animations */
  @keyframes tail {
    0% {
      width: 0;
    }

    30% {
      width: 100px;
    }

    100% {
      width: 0;
    }
  }

  @keyframes shining {
    0% {
      width: 0;
    }
    50% {
      width: 30px;
    }
    100% {
      width: 0;
    }
  }

  @keyframes shooting {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(320px);
    }
  }
</style>
