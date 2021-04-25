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

    <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-10/12 rounded-md h-10 p-5 mt-5 mb-5" />

	  <div class="mx-16">
      <div v-for="post of postList" :key="post">
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
  export default {
    data () {
      return {
        query: '',
        postList: []
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
          .fetch()
      }
    },
    async asyncData({ $content, params }) {
      const postList = await $content('blog', params.slug)
        .only(['title', 'description', 'slug', 'date', 'minread'])
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
