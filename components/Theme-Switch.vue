<template>
  <div>
    <button @click="toggle" id="theme-toggle" accesskey="t" title="(Alt + T)" aria-label="Color Mode" class="w-6 h-6 focus:outline-none">
      <Logo-Moon />
      <Logo-Sun />
      </button>
  </div>
</template>

<script>
  export default {
    methods: {
      toggle() {
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
