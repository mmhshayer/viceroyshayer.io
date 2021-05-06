<template>
  <div class="pt-10">
    <h1 class=" text-7xl">{{ post.title }}</h1>
    <sub>{{ post.minread }}</sub>
    <nuxt-link
      v-for="category in post.category"
      :key="category"
      :to="`/categories/${categorySlug(category)}`"
      class="rounded-md uppercase text-sm mr-2 px-2 py-1 bg-red-400"
      >
        {{ category }}
    </nuxt-link>
    <p>{{ post.description }}</p>

    <section class="tableofcontent">
      <h3>Table of Content</h3>
      <div id="toc">
        <ul>
          <li
            v-for="link of post.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
	  <nuxt-content :document="post" />
    <Prev-Next :prev="prev" :next="next" class="mt-8" />
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase'

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
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    categorySlug(category) {
      return kebabCase(category)
    },
  },
  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }

}
</script>

<style scoped>
  #toc li {
    font-size: 18px;
  }
  #toc li a {
    cursor: default;
    text-decoration: none;
  }
  #toc ul {
    margin-bottom: 5px;
  }

  .tableofcontent h3 {
    margin-top: 0px;
  }
  .tableofcontent {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border-color: rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    border-style: solid;
    border-width: 0.666667px;
  }
</style>
