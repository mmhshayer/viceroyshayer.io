<template>
  <div>
    <button @click="toggle" id="theme-toggle" accesskey="t" title="(Alt + T)" aria-label="Color Mode" class="w-6 h-6 focus:outline-none">
      <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
      <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
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

  #sun {
    stroke: gold;
    fill: gold;
  }

  #sun:hover {
    stroke: gray;
    fill: gray;
  }

  #moon {
    stroke: gold;
    fill: gold;
  }

  #moon:hover {
    stroke: silver;
    fill: silver;
  }

  .dark-mode body #moon {
    vertical-align: middle;
    display: none
  }

  .light-mode body #sun {
    display: none
  }
</style>
