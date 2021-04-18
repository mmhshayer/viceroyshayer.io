<template>
  <div class="post-container">
    <nav class="border-2">
      <ul>
        <li v-for="link of post.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
	  <nuxt-content :document="post" />
    <Prev-Next :prev="prev" :next="next" class="mt-8" />
  </div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {

		const post = await $content('blog', params.slug).fetch();

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

		return {
      post,
      prev,
      next
    }
	},
  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }

}
</script>

<style scoped>
  .post-container {
    background: red;
    margin: 0px;
    border: 2px solid green;
    padding: 25px;
    display: block;
    max-width: 100%;
  }
</style>
