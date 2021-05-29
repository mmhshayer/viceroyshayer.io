<template>
  <div class="w-full flex flex-col h-auto fixed z-40">
    <button @click="toggleMenu" aria-label="Menu Button" accesskey="m" title="(Alt + M)" class="z-50 absolute self-center pt-3 menu-botton animate-bounce">
      <keep-alive>
        <component :is="menu.componentId" class="pt-1 w-6 h-8"></component>
      </keep-alive>
    </button>

    <div class="h-screen w-full opacity-90 hidden" :class="{'makeVisible': !menu.isHidden}">
      <div class="flex flex-col w-full justify-center menu-items">
        <Theme-Switch class="self-center"/>
        <nuxt-link to="/" @click.native="resetOnClick">{{ $t('mthome') }}</nuxt-link>
        <nuxt-link to="/about" @click.native="resetOnClick">{{ $t('mtabout') }}</nuxt-link>
        <nuxt-link to="/contact" @click.native="resetOnClick">{{ $t('mtcontact') }}</nuxt-link>
        <a href="/mustakim13579@gmail.pdf" download="">{{ $t('mtdownloadcv') }} CV</a>

        <div class="flex flex-row w-full justify-center">
          <ul
            class="flex lang-switch justify-around text-bold text-3xl"
            @click.prevent.stop="$i18n.setLocale(locale.code)"
            v-for="locale in availableLocales" :key="locale.code"
          >
            <li class="pr-5">
              {{ locale.name }}
            </li>
          </ul>
        </div>

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
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>

<style scoped>
  .menu-botton {
    outline: none;
  }
  .makeVisible {
    background: var(--background-color);
    display: inherit;
    position: fixed;
  }
  .menu-items a {
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
  .menu-items a:hover {
    font-size: 3em;
    color: blueviolet;
  }
</style>
