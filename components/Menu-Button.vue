<template>
  <div class="w-full flex flex-col h-auto">
    <button @click="toggleMenu" class="z-50 absolute self-center">
      <keep-alive>
        <component :is="menu.componentId" class="w-8 h-8"></component>
      </keep-alive>
    </button>

    <div class="z-40 h-screen hidden" :class="{'makeVisible': !menu.isHidden}" >
      <div class="flex flex-col w-full items-center justify-center">
        <nuxt-link to="/about" @click.native="resetOnClick">About</nuxt-link>
        <nuxt-link to="/contact" @click.native="resetOnClick">Contact</nuxt-link>
        <nuxt-link to="/showcase" @click.native="resetOnClick">Showcase</nuxt-link>
        <nuxt-link to="/blog" @click.native="resetOnClick">Blog</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Up from './svg/Logo-Arrow-Up'
  import Down from './svg/Logo-Arrow-Down'

  export default {
    components: {
      'icon-up': Up,
      'icon-down': Down,
    },
    data () {
      return {
        menu: {
          componentId: `icon-up`,
          isHidden: true,
        },
      }
    },
    methods: {
      toggleMenu() {
        this.menu.componentId = this.menu.componentId === "icon-up" ? "icon-down" : "icon-up";
        this.menu.isHidden = this.menu.isHidden === true ? false : true;
      },
      resetOnClick () {
        this.menu.componentId = 'icon-up';
        this.menu.isHidden = true;
      }
    }
  }
</script>

<style scoped>
  button {
    outline: none;
  }
  .makeVisible {
    @apply bg-yellow-500;
    display: inherit;
  }
</style>
<!--
note to self -
  1. try making s simple button to scitch component, then add menu funtion to it, them swa ot with svg component
  2. use import Instagram from '~/assets/icons/instagram.svg?inline' to import component then
    components: {
      Instagram,
    },
  3. components can be directly styled with class="w-10 h-10"
  4. <button > <div v-html="require(`../assets/icons/${name}.svg?raw`)" class="w-10" /> </button>

    props: {
      name: { type: String, default: "reddit" },
    },

  this works fine but it puts a div on the icon itself, so that makes it had to style it here in this file
-->

<!--

    components: {
      'icon-up': Instagram,
      'icon-down': Reddit,
    },
    data () {
      return {
        value: Boolean
      }
    },
    computed: {
      componentId() {
        if(value) {
          return 'icon-up';
        } else {
          return 'icon-down';
        }
      }
    },
    methods: {
      toggleMenu(components) {
        this.componentId === component;
      }
    }

-->
