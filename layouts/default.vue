<template>
  <body class="pt-20">
    <Global-Header class="fixed top-0 inset-x-0 z-50 h-20"/>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 ">
      <div class="mx-auto flex flex-col">
        <Nuxt class="min-h-screen mb-5"/>
        <Global-Footer />
      </div>
    </div>
  </body>
</template>

<style>
  /*
  Note -
   @body padding top equal to height of header is given, then header is fixed at top for the page with fized height = padding top
   other methiord is to her height for nav bar look up
     youtube =  https://www.youtube.com/watch?v=1hoSQhtd0IQ
    header is put inside a flex auto centering
    mb-auto @ "Nuxt" needs reasearch of purpose
    max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 makes shit responsive it needs improvement for all screen size
    footer is flex-column auto centering

    flex flex-col
    grid grid-cols-1
  */
  html {
    font-family:
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
</style>
