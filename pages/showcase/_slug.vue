<template>
  <div>
	  <nuxt-content :document="project" />
  </div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {

		const project = await $content('showcase', params.slug).fetch();

    const [prev, next] = await $content('showcase')
      .only(['title', 'slug'])
      .sortBy('title', 'asc')
      .surround(params.slug)
      .fetch()

		return {
      project,
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
