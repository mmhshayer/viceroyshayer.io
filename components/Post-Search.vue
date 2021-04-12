<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />

    <ul v-if="postList.length">
      <li v-for="post of postList" :key="post.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">{{ post.title }}</NuxtLink>
      </li>
    </ul>
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
        this.postList = []
        return
      }

      this.postList = await this.$content('blog')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  }
}
</script>
