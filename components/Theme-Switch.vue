<template>
  <div>
    <button @click="toggle" id="theme-toggle" accesskey="t" title="(Alt + T)" aria-label="Color Mode" class="w-6 h-6 focus:outline-none">
      <keep-alive>
        <component :is="themeIconId"></component>
      </keep-alive>
      </button>
  </div>
</template>

<script>
import Sun from './svg/Logo-Sun'
import Moon from './svg/Logo-Moon'

  export default {
    components: {
      'icon-sun': Sun,
      'icon-moon': Moon,
    },
    data () {
      return {
        themeIconId: `icon-moon`,
      }
    },
    methods: {
      toggle() {
        this.themeIconId = this.themeIconId === "icon-moon" ? "icon-sun" : "icon-moon";
        this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
      }
    }
  };
</script>

<style scoped>
  button#theme-toggle  {
    height: auto;
    margin: auto 5px
  }
</style>
