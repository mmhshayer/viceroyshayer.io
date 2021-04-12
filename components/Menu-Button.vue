
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
