<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" placeholder="Search" class="w-10/12 rounded-md h-10 p-5 mt-5 mb-5 search-style" />
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

<style scoped>
.search-style {
   border: var(--hover-color);
 }
.search-style:focus {
   border: var(--primary-color);
}
</style>
