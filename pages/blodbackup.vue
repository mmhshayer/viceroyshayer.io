<template>
  <div>
    <div class="pt-3">
      <h1 class="text-7xl font-bold ">Blog</h1>
      <section >
        <sub class="leading-8 font-light text-sm">Personal Opinions</sub>
        <p>
          Welcome to My Blog.
          where I write my personal opinions.
        </p>
      </section>
    </div>

    <div class="flex flex-col mt-5 mb-5">

      <div class="flex flex-row p-2">
        <button @click="toggleSort" class="z-50 self-center p-2">
          <keep-alive>
            <component :is="componentId" class="pt-1 w-6 h-8"></component>
          </keep-alive>
        </button>

        <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-full rounded-md h-10 p-5 " />
      </div>

      <div class="flex space-x-2 justify-center">
        <div class="bg-blue-200 hover:bg-blue-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
         @click="toggle($event)">
          Thoughts
        </div>
        <div class="bg-yellow-200 hover:bg-yellow-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
          @click="toggle($event)">
          lorem
        </div>
        <div class="bg-green-200 hover:bg-green-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
          @click="toggle($event)">
          Tarot
        </div>
        <div class="bg-pink-200 hover:bg-pink-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
          @click="toggle($event)">
          Memories
        </div>
      </div>
    </div>



	  <div class="mx-16">
      <div v-for="(post, index) of filtered" :key="index">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <div>
            <div class="mb-5 p-5 rounded-lg bg-red-400">
              <h2 class="text-2xl font-bold leading-8 tracking-tight" >{{ post.title }}</h2>
              <p class="max-w-none">{{ post.description }}</p>
              <sub>
                {{ post.date }}
                <span>&middot;</span>
                {{ post.minread }}
              </sub>
            </div>
          </div>
        </nuxt-link>
      </div>
	  </div>

  </div>
</template>

<script>
  import Asc from '/components/svg/Logo-Sort-Ascending'
  import Desc from '/components/svg/Logo-Sort-Descending'

  export default {
    components: {
      'icon-Asc': Asc,
      'icon-Desc': Desc,
    },
    data () {
      return {
        query: '',
        postList: [],
        componentId: `icon-Asc`,
        selected: [ "Thoughts", "Opinions", "Tarot", "Memories"],
      }
    },
    watch: {
      async query (query) {
        if (!query) {
          this.postList = postList
          return
        }
        this.postList = await this.$content('blog')
          .only(['title', 'slug', 'description'])
          .search(query)
          .sortBy('title', 'asc')
          .fetch()
      }
    },
    methods: {
      toggleSort() {
        this.componentId = this.componentId === "icon-Asc" ? "icon-Desc" : "icon-Asc";
      },
      toggle (event) {
        const element = event.target;
        const text = element.textContent.trim()
        console.log("you clicked: " + text)

        if (this.selected.includes(text)) {
          element.classList.add("opacity-50")
          this.selected.splice(this.selected.indexOf(text), 1)
          console.log(this.selected)
        } else {
          element.classList.remove("opacity-50")
          this.selected.push(text)
          console.log(this.selected)
        }
      }
    },
    computed: {
      filtered () {
        if (this.selected.length == 0) {
          return
        } else {
          return this.postList.filter( post => this.selected.includes(post.category))
        }
      }
    },
    async asyncData({ $content, params }) {
      const postList = await $content('blog', params.slug)
        .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
        .sortBy('title', 'asc')
        .fetch();
      return {
        postList
      }
    }
  }
</script>

<style scoped]>
  .post-per-entry {
    background-color: var(--secondary-background-color);
    transition: all 0.2s ease-in-out;
  }
  .post-per-entry:hover {
    @apply bg-red-900;
  }
</style>
