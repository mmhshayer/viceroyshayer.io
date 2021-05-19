<template>
  <div class="bg-yellow-400">
    <div class="min-h-screen min-w-full z-0 grid place-items-center">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <h1 class="my-3 text-7xl font-semibold">
          About
        </h1>
        <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Mohammad Mustakim Hassan</h2>
        <p class="text-gray-500">Freelance Developer</p>
      </div>
    </div>

    <div class="pb-20 flex flex-col w-full items-center text-center">
<!-- timeline -->
      <div class="flex flex-col inset-y-5">
        <div>
          <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
          <h1 class="text-3xl font-semibold leading-none">Education</h1>
          <sub>(time-line)</sub>
        </div>
        <div class="pt-10 timeline">
            <ul>
              <li>
                <div>
                    <div class="mb-4 mt-2 font-bold leading-3">2019 September</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic md:mb-4">Computer Science</sub>
                    <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-4 mt-2 font-bold leading-3">2019 September</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic md:mb-4">Computer Science</sub>
                    <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-4 mt-2 font-bold leading-3">2019 September</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic md:mb-4">Computer Science</sub>
                    <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                </div>
              </li>
            </ul>
          </div>
      </div>
<!-- timeline -->
      <div class="flex flex-col inset-y-5">
        <div>
          <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
          <h1 class="text-3xl font-semibold leading-none">Work Experiance</h1>
          <sub>(time-line)</sub>
        </div>
        <div class="pt-10 timeline">
            <ul>
              <li>
                <div>
                    <div class="mb-4 mt-2 font-bold leading-3">2019 September</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic md:mb-4">Computer Science</sub>
                    <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-4 mt-2 font-bold leading-3">2019 September</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic md:mb-4">Computer Science</sub>
                    <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-4 mt-2 font-bold leading-3">2019 September</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic md:mb-4">Computer Science</sub>
                    <div class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</div>
                </div>
              </li>
            </ul>
          </div>
      </div>
<!-- tags -->
      <div>
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-3xl font-semibold leading-none">Soft Skills</h1>
        <sub>(tag-button)</sub>
      </div>
      <div>
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-3xl font-semibold leading-none">Tech Skills</h1>
        <sub>(tag-button)</sub>
      </div>
      <div>
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-3xl font-semibold leading-none">Tach I've worked with</h1>
        <sub>(tag-button)</sub>
      </div>

    </div>



  </div>
</template>

<script>
  export default {
    layout: 'page',
  }
</script>

<style scoped>
  .timeline {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .timeline ul {
    list-style: none;
  }
  .timeline ul li {
    padding: 20px;
  }
  @media only screen and (min-width: 768px) {
    .timeline:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: gray;
    }
    .timeline ul li {
      width: 50%;
      position: relative;
    }
    .timeline ul li:nth-child(odd) {
      float: left;
      clear: right;
      text-align: right;
      transform: translateX(-30px);
      border-radius: 20px 0px 20px 20px;
    }
    .timeline ul li:nth-child(even) {
      float: right;
      clear: left;
      text-align: left;
      transform: translateX(30px);
      border-radius: 0px 20px 20px 20px;
    }
    .timeline ul li::before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: gray;
      top: 0px;
    }
    .timeline ul li:nth-child(odd)::before {
      transform: translate(50%, -50%);
      right: -30px;
    }
    .timeline ul li:nth-child(even)::before {
      transform: translate(-50%, -50%);
      left: -30px;
    }
    .timeline ul li:hover::before {
      background-color: var(--hover-color);
    }
  }


</style>
