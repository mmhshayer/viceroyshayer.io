<template>
  <div>
    <div>
      <h1>Blog</h1>
      <section >
        <sub>Latest postList</sub>
        <p>Welcome to my Small blog.</p>
        <p>I dont post very often. But when I do I mean it.</p>
      </section>
    </div>

	  <div>
		  <div v-for="post of postList" :key="post">
			  <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
				  <div>
						<div>
							<h3 >{{ post.title }}</h3>
							<p>{{ post.description }}</p>
              <sub>
                {{ post.date }}
                <span>&nbsp;</span>
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
	async asyncData({ $content, params }) {
		const postList = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug', 'date', 'minread'])
			.sortBy('createdAt', 'asc')
			.fetch();
		return {
			postList
		}
	}
}
</script>

<style scoped]>

</style>
