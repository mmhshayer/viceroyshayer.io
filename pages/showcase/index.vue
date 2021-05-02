<template>
  <div>
	  <div class="pt-3 mb-5">
      <h1 class="text-5xl font-bold "> Showcase </h1>
      <section >
        <sub class="leading-8 font-light text-sm">Definitely not showing off</sub>
        <p>
          Here you will find a curated list of prsonal learning projects and previous work I am allowed to showcase.
        </p>
      </section>
    </div>

    <div class="flex flex-wrap mt-8 justify-center space-x-2">
      <div v-for="(tag, i) in tags" :key="i">
        <button class="btn" @click="toggle($event)">
          {{ tag }}
        </button>
      </div>
    </div>

    <div class="mx-16">
      <div v-for="(project, index) of filteredProject" :key="index">
        <nuxt-link :to="{ name: 'showcase-slug', params: { slug: project.slug } }">
          <div>
            <div class="mb-5 p-5 rounded-lg bg-red-400">
              <h2 class="text-2xl font-bold leading-8 tracking-tight" >{{ project.title }}</h2>
              <p class="max-w-none">{{ project.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
	  </div>

  </div>
</template>

<script>
export default {
	async asyncData( { $content, params } ) {
		const projects = await $content('showcase', params.slug )
			.only(['title', 'description', 'slug', 'tags'])
			.fetch();
		return {
			projects
		}
	},
  data () {
    return {
      selectedTag: 'all',
      tags: [
        'all',
        'dummy',
        'alt',
      ],
    }
  },
  methods: {
    toggle (event) {
      const element = event.target
      const text = element.textContent.trim()
      if (this.selectedTag.includes(text)) {
        return
      } else {
        this.selectedTag = ''
        this.selectedTag = text
        console.log(this.selectedTag)
      }
    }
  },
  computed : {
    filteredProject() {
      if (this.selectedTag.includes("all")) {
        return this.projects = this.projects
      } else {
        console.log(this.projects)

        return this.projects.filter(el => el.tags.includes(this.selectedTag))
      }
    }
  },
}
</script>

<style scoped]>
</style>
