<template>
  <div class="pt-10">
    <h1 class=" text-7xl">{{ post.title }}</h1>
    <sub>{{ post.minread }}</sub>
    <p>{{ post.description }}</p>
    <TableOfContent :toc="post.toc"  class="pb-10"/>
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
</style>
