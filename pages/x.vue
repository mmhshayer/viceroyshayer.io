<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-full rounded-md h-10 p-5 " />

    <div class="flex space-x-2 justify-center">
        <div class="bg-blue-200 hover:bg-blue-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
         @click="toggle($event)">
          All
        </div>
        <div class="bg-yellow-200 hover:bg-yellow-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
          @click="toggle($event)">
          lorem
        </div>
        <div class="bg-green-200 hover:bg-green-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
          @click="toggle($event)">
          Tarot
        </div>
    </div>

    <div v-for="(post, index) of postList" :key="index">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
        <div>
            <h1>{{ post.title }}</h1>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const postList = await $content('blog', params.slug)
        .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
        .fetch();
      return {
        postList
      }
    },
    data () {
      return {
        query: '',
        categoryList: [],
      }
    },
    methods: {
      toggle (event) {
        const element = event.target
        const text = element.textContent.trim()

        if (this.categoryList.includes(text)) {
          return
        } else {
          this.categoryList = []
          this.categoryList.push(text)
          console.log(this.categoryList)
        }
      }
    },
    watch: {
      async query (query) {
        if (!query) {
          this.postList = this.postList
          return
        }
        if (query && this.categoryList.length == 0) {
          this.postList = await this.$content('blog')
            .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
            .search(query)
            .fetch()
        }
        if (query && this.categoryList.length != 0) {
          this.postList = await this.$content('blog')
            .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
            .where({
              category: this.categoryList.toString()
            })
            .search(query)
            .fetch()
        }
      },
      async filter () {
        if (this.categoryList.length == 0 || this.categoryList.includes("All")) {
          this.categoryList = this.categoryList
        } else {
          this.postList = await this.$content('blog')
            .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
            .where({
              category: this.categoryList
            })
            .fetch()
        }
      }
    },
  }
</script>

<style scoped>

</style>
