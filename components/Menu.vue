<template>
  <div class="w-full flex flex-col h-auto">
    <button @click="toggleMenu" class="z-50 absolute self-center pt-3">
      <keep-alive>
        <component :is="menu.componentId" class="pt-1 w-6 h-8"></component>
      </keep-alive>
    </button>

    <div class="z-40 h-screen w-screen hidden" :class="{'makeVisible': !menu.isHidden}">
      <div class="flex flex-col w-full justify-center" id="menu-items">
        <nuxt-link to="/" @click.native="resetOnClick">Home</nuxt-link>
        <nuxt-link to="/about" @click.native="resetOnClick">About</nuxt-link>
        <nuxt-link to="/contact" @click.native="resetOnClick">Contact</nuxt-link>
        <a href="/assets/doc/mustakim13579@gmail.pdf" download="">Download CV</a>
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
    background: var(--background-color);
    opacity: 90%;
    display: inherit;
    position: fixed;
  }
  #menu-items a {
	 display: block;
	 font-size: 2em;
	 text-decoration: none;
	 padding: 10px 0;
	 text-align: center;
	 color: var(--primary);
	 font-weight: bold;
	 transition: all 0.2s ease-in-out;
	 text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
}
  #menu-items a:hover {
    font-size: 3em;
    color: blueviolet;
  }
</style>
