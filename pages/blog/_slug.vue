<template>
  <div class="pt-10">
    <div class="text-center">
    <h1 class="text-7xl">{{ post.title }}</h1>
    <sub class="leading-3">{{ post.sub }}</sub>
    <hr class="small leading-3">
    <div>
      <sub>{{ post.date }}</sub>
      <span>|</span>
      <sub>{{ post.minread }}</sub>
      <span>|</span>
      <sub>{{ post.words }}</sub>
    </div>
      <nuxt-link
        v-for="category in post.category"
        :key="category"
        :to="`/categories/${categorySlug(category)}`"
        class="uppercase text-sm"
        >
          #{{ category }}
      </nuxt-link>
  </div>

  <section class="border-2">
    <h1 class="text-center">Table of Content</h1>
    <ul>
      <li
        v-for="link of post.toc"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </section>

  <section>
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
  </section>
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
  .small {
    max-width: 100px;
    margin: 15px auto;
    border-width: 4px;
    border-color: var(--primary-color);
    border-radius: 3px;
  }
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
