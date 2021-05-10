<template>
  <div>
    <div class="pt-3 mb-5 text-center">
      <h1 class="text-7xl font-bold "> Blog </h1>
      <section >
        <sub class="leading-8 font-light text-sm">by Category</sub>
        <p>
          All post under category of <strong class="text-3xl font-bold "> #{{ this.slug }}</strong>
        </p>
      </section>
    </div>

    <div class="flex flex-col ">
      <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-full rounded-md h-10 p-5 mb-5" />

      <div class="flex space-x-2 justify-center mb-5">
        <nuxt-link to="#" class="bg-blue-200 hover:bg-blue-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
         >
          #lorem
        </nuxt-link>
        <nuxt-link to="#" class="bg-green-200 hover:bg-green-300 transition duration-200 py-2 px-3 shadow-sm rounded-sm cursor-pointer"
          >
          #Tarot
        </nuxt-link>
      </div>
    </div>

    <div class="mx-16">
      <div v-for="(post, index) of postOfThisCategory" :key="index">
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
              <nuxt-link
                v-for="category in post.category"
                :key="category"
                :to="`/categories/${categorySlug(category)}`"
                class="rounded-md uppercase text-sm mr-2 px-2 py-1 bg-red-400"
                >
                  {{ category }}
              </nuxt-link>
            </div>
          </div>
        </nuxt-link>
      </div>
	  </div>

  </div>

</template>

<script>
import kebabCase from 'lodash/kebabCase'

  export default {
    async asyncData({ $content, params }) {
      const slug = params.slug
      const postOfThisCategory = await $content("blog")
        .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
        .where({
          category: { $containsAny: slug }
        })
        .fetch()
      return {
        slug,
        postOfThisCategory
      }
    },
    data () {
      return {
        query: '',
      }
    },
    methods: {
      categorySlug(category) {
        return kebabCase(category)
      },
    },
    watch: {
      async query (query) {
        if (!query) {
          this.postOfThisCategory = this.postOfThisCategory
        }
        this.postOfThisCategory = await this.$content('blog')
          .only(['title', 'description', 'slug', 'date', 'minread', 'category'])
          .where({
            category: { $containsAny: this.slug }
          })
          .search(query)
          .fetch()
      }
    },
  }
</script>

<style scoped>

</style>
