<template>
  <div class="pb-20 flex flex-col w-full items-center text-center space-y-20 color-change-2x">

    <div class="min-h-screen min-w-full z-0 grid place-items-center">
      <div
        class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center fade-in-top">
        <h1 class="my-3 text-7xl font-black">
          {{ $t('mtabout') }}
        </h1>
        <p class="leading-relaxed text-lg">{{ $t('atmainbio') }}</p>
        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{ $t('thename') }}</h2>
        <p class="text-gray-500">{{ $t('atselftitle') }}</p>
      </div>
    </div>

    <!-- education -->
    <div class="flex flex-col inset-y-5">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-6xl font-extrabold leading-none">{{ $t('atedu') }}</h1>
        <sub>{{ $t('atedusub') }}</sub>
      </div>
      <div class="pt-10 timeline"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
          >
          <ul>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                  <div class="mb-3 mt-2 font-bold leading-3">2019 - 2023</div>
                  <div class="font-bold text-3xl">{{ $t('atedu-4-name') }}</div>
                  <sub class="italic">{{ $t('atedu-4-loc') }}</sub>
                  <div class="italic font-semibold mb-3">{{ $t('atedu-4-cou') }}</div>
                  <summary class="mb-10">{{ $t('atedu-4-desc') }}</summary>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                  <div class="mb-3 mt-2 font-bold leading-3">2016 - 2017</div>
                  <div class="font-bold text-3xl">{{ $t('atedu-3-name') }}</div>
                  <sub class="italic">{{ $t('atedu-3-loc') }}</sub>
                  <div class="italic font-semibold mb-3">{{ $t('atedu-3-cou') }}</div>
                  <summary class="mb-10">{{ $t('atedu-3-desc') }}</summary>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                  <div class="mb-3 mt-2 font-bold leading-3">2012 - 2014</div>
                  <div class="font-bold text-3xl">{{ $t('atedu-2-name') }}</div>
                  <sub class="italic">{{ $t('atedu-2-loc') }}</sub>
                  <div class="italic font-semibold mb-3">{{ $t('atedu-2-cou') }}</div>
                  <summary class="mb-10">{{ $t('atedu-2-desc') }}</summary>
              </div>
            </li>
            <li>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                  <div class="mb-3 mt-2 font-bold leading-3">2012 - 2010</div>
                  <div class="font-bold text-3xl">{{ $t('atedu-1-name') }}</div>
                  <sub class="italic">{{ $t('atedu-1-loc') }}</sub>
                  <div class="italic font-semibold mb-3">{{ $t('atedu-1-cou') }}</div>
                  <summary class="mb-10">{{ $t('atedu-1-desc') }}</summary>
              </div>
            </li>
          </ul>
        </div>
    </div>
    <!-- work experiance timeline -->
    <!-- skills -->
    <div class="px-20">
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-6xl font-extrabold leading-none">{{ $t('atskil') }}</h1>
        <sub>{{ $t('atskilsub') }}</sub>
      </div>
      <ul class="py-10 px-5 md:px-24 lg:px-72 flex flex-row flex-wrap space-x-2 space-y-2 justify-center">
        <li
          v-for="(tag, i) in tags" :key="i"
          class="rounded-full font-bold px-4 py-3 transition duration-300 ease-in-out"
          :style="{ backgroundColor: randomColor() }"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <nuxt-link to="#"> {{ tag }} </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- languages -->
    <div>
      <div
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-6xl font-extrabold leading-none">{{ $t('atlang') }}</h1>
        <sub>{{ $t('atlangsub') }}</sub>
      </div>
      <ul class="py-10  grid grid-cols-1 md:grid-cols-2 gap-5">
        <li
          v-for="(lang, i) in languages" :key="i"
          class="shadow-lg rounded-xl w-72 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden"
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
          >
            <h3 class="text-gray-700 dark:text-white text-2xl font-light mb-4"
            > {{ lang.name }} </h3>
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
     <!-- github language pie chart + possible future extention to git profile data -->
    <!--  // the ifreme pie chart is too big for the screen and fked up the layout
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <hr class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6">
        <h1 class="text-6xl font-extrabold leading-none">Programming Languages</h1>
        <sub>(tag line)</sub>
      </div>
      <iframe width="350" height="350" src="https://ionicabizau.github.io/github-profile-languages/api.html?viceroyshayer" frameborder="0"
          data-aos="slide-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
          ></iframe>
    </div>
  -->
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
            name: 'বাংলা',
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
            name: '中文',
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
            name: 'हिंदी',
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
