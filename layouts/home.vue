<template>
  <body class="cbpt max-h-screen overflow-y-scroll snap snap-y snap-proximity snap-padding">
    <Global-Header class="fixed top-0 z-50" />
    <section class="w-full cbmh bg-red-200 snap-start">
      Section 1
    </section>
    <Carousel class="snap-start"/>
    <section class="w-full cbxh bg-green-200 snap-start">
      Section 3
    </section>
    <section class="w-full cbxh bg-indigo-200 snap-start">
      Section 4
    </section>
    <section class="w-full cbxh bg-yellow-200 snap-start">
      Section 5
    </section>
    <Global-Footer />
  </body>
</template>

<style>
  .snap {
    scroll-snap-type: var(--scroll-snap-direction) var(--scroll-snap-constraint);
  }
  .snap-y {
    --scroll-snap-direction: y;
  }
  .snap-proximity {
    --scroll-snap-constraint: proximity;
  }
  .snap-start {
    scroll-snap-align: start;
  }
  .snap-padding {
    scroll-padding-top: 8.33vh;
  }
</style>
