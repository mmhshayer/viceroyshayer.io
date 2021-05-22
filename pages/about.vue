<template>
  <!-- full screner -->
  <div class="bg-yellow-400">
    <div class="min-h-screen min-w-full z-0 grid place-items-center">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <h1 class="my-3 text-7xl font-black">
          About
        </h1>
        <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Mohammad Mustakim Hassan</h2>
        <p class="text-gray-500">Freelance Developer</p>
      </div>
    </div>
    <!-- flexed and centered -->
    <div class="pb-20 flex flex-col w-full items-center text-center space-y-20">
      <!-- timeline -->
      <div class="flex flex-col inset-y-5">
        <div>
          <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
          <h1 class="text-6xl font-extrabold leading-none">Education</h1>
          <sub>(timeline)</sub>
        </div>
        <div class="pt-10 timeline">
            <ul>
              <li>
                <div>
                    <div class="mb-3 mt-2 font-bold leading-3">2019 - 2023</div>
                    <div class="font-bold text-3xl">Hubei University of Technology</div>
                    <sub class="italic">Wuhan, Hubei, China</sub>
                    <div class="italic font-semibold mb-3">B.Sc Computer Science</div>
                    <summary class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</summary>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-3 mt-2 font-bold leading-3">2016 - 2017</div>
                    <div class="font-bold text-3xl">Asia Pacific University of Technology & Innovation</div>
                    <sub class="italic">Technology Park - 5, Kuala Lumpur, Malaysia</sub>
                    <div class="italic font-semibold mb-3">B.Eng Mechatronics Engineering (dropped out)</div>
                    <summary class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</summary>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-3 mt-2 font-bold leading-3">2012 - 2014</div>
                    <div class="font-bold text-3xl">Notre Dame College</div>
                    <sub class="italic md:mb-4">Motijheel, Dhaka, Bangladesh</sub>
                    <div class="italic font-semibold mb-3">HSC &middot; Higher Secondary</div>
                    <summary class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</summary>
                </div>
              </li>
              <li>
                <div>
                    <div class="mb-3 mt-2 font-bold leading-3">2012 - 2010</div>
                    <div class="font-bold text-3xl">Dhaka Public School</div>
                    <sub class="italic md:mb-4">Dhanmondi, Dhaka, Bangladesh</sub>
                    <div class="italic font-semibold mb-3">SSC &middot; Secondary School</div>
                    <summary class="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis, consectetur sed elit sed, vestibulum ultrices nibh.</summary>
                </div>
              </li>
            </ul>
          </div>
      </div>
      <!-- timeline -->
      <!-- work experiance -->
      <!-- tags -->
      <div class="px-20">
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-6xl font-extrabold leading-none">Skills</h1>
        <sub>(tag button)</sub>
        <ul class="py-10 px-5 md:px-24 lg:px-72 flex flex-row flex-wrap space-x-2 space-y-2 justify-center">
          <li
            v-for="(tag, i) in tags" :key="i"
            class="rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out"
            :style="{ backgroundColor: randomColor() }">
            <nuxt-link to="#"> {{ tag }} </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- tags -->
      <div>
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-6xl font-extrabold leading-none">Languages</h1>
        <sub>(tag line)</sub>
        <ul class="py-10  grid grid-cols-1 md:grid-cols-2 gap-5">
          <li
            v-for="(lang, i) in languages" :key="i"
            class="shadow-lg rounded-xl w-72 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden">
              <h3 class="text-gray-700 dark:text-white text-2xl font-light mb-4"> {{ lang.name }} </h3>
              <div>
                <div v-for="(score, j) in lang.scores" :key="j">
                  <div class="flex items-center justify-between text-gray-400 text-sm">
                      <p>
                        {{ score.name }}
                      </p>
                      <p>
                        {{ score.value }}
                      </p>
                  </div>
                  <div class="w-full h-5 bg-green-100 rounded-full mb-4">
                    <div class="h-full text-center text-xs text-white bg-green-400 rounded-full" :style="{ width: score.value }">
                    </div>
                  </div>
                </div>
              </div>
          </li>
        </ul>
      </div>
      <!-- tags -->
      <div>
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-7xl font-extrabold leading-none">Tach I've worked with</h1>
        <sub>(tag button)</sub>
      </div>

    </div>



  </div>
</template>

<script>
  export default {
    layout: 'page',
    data () {
      return {
        tags: [
          'Microsoft Word',
          'Microsoft Excel',
          'Microsoft PowerPoint',
          'Adobe Illustrator',
          'Adobe Photoshop',
          'git',
          'GitHub',
          'HTML',
          'CSS',
          'JavaScript',
          'NodeJS',
          'VueJS',
          'NuxtJS',
          'Tailwind CSS',
        ],
        bands: [
          'Listening',
          'Reading',
          'Writing',
          'Speaking',
        ],
        languages: [
          {
            name: 'Bangla',
            message: 'Native',
            scores : [
              {
                name: 'Listening',
                value: '100%'
              },
              {
                name: 'Reading',
                value: '100%'
              },
              {
                name: 'Writing',
                value: '90%'
              },
              {
                name: 'Speaking',
                value: '90%'
              },
            ]
          },
          {
            name: 'English',
            message: 'Second Language',
            scores : [
              {
                name: 'Listening',
                value: '85%'
              },
              {
                name: 'Reading',
                value: '85%'
              },
              {
                name: 'Writing',
                value: '85%'
              },
              {
                name: 'Speaking',
                value: '85%'
              },
            ]
          },
          {
            name: 'Mandarin Chinese',
            message: 'Learning',
            scores : [
              {
                name: 'Listening',
                value: '75%'
              },
              {
                name: 'Reading',
                value: '75%'
              },
              {
                name: 'Writing',
                value: '65%'
              },
              {
                name: 'Speaking',
                value: '65%'
              },
            ]
          },
          {
            name: 'Hindi',
            message: 'Pasively Acquired',
            scores : [
              {
                name: 'Listening',
                value: '85%'
              },
              {
                name: 'Reading',
                value: '0%'
              },
              {
                name: 'Writing',
                value: '0%'
              },
              {
                name: 'Speaking',
                value: '75%'
              },
            ]
          },
        ]
      }
    },
    methods: {
      randomColor() {
        var lastPick;
        var rand;
        rand = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        rand == lastPick ? randomColor() : rand;
        lastPick = rand;
        return rand;
      }
    }
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

  @media only screen and (min-width: 768px) {
    .timeline:before {
      content: "";
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: var(--primary-color);
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
    }
    .timeline ul li:nth-child(even) {
      float: right;
      clear: left;
      text-align: left;
      transform: translateX(30px);
    }
    .timeline ul li::before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: gray;
      top: 1rem;
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

<!--
        languages: [
          {
            name: 'English',
              scores : [
                '80%',
                '80%',
                '80%',
                '80%',
              ]
          },
          {
            name: 'Bangla',
              scores : [
                { 'asdc': 'apple' },
                { 'adc' : 'orange' }
              ]
          },
          {
            name: 'Mandarin',
              scores : [
                '80%'
              ]
          },
          {
            name: 'Arabic',
              scores : [
                '80%'
              ]
          },
        ]
  -->
