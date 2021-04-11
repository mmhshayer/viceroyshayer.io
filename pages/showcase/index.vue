<template>
  <div>
	  <h2>Latest Posts</h2>
	  <div >
		  <div v-for="project of projectList" :key="project">
			  <nuxt-link :to="{ name: 'showcase-slug', params: { slug: project.slug } }">
				  <div >
<!--						<img :src="require(`~/assets/image/${project.img}`)" alt="" /> -->
						<div>
							<h3>{{ project.title }}</h3>
							<p>{{ project.description }}</p>
						</div>
				  </div>
			  </nuxt-link>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
	async asyncData( context ) {
    const { $content, params } = context;
		const projectList = await $content('showcase', params.slug)
			.only(['title', 'description', 'img', 'slug'])
			.sortBy('title', 'asc')
			.fetch();
		return {
			projectList
		}
	}
}
</script>

<style scoped]>

</style>
