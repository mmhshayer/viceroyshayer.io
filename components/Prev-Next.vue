<template>
  <nav class="paginav">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="prev" id="nuxt-link"
    >
      <span class="title">« PREV PAGE</span>
      <br>
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="next" id="nuxt-link"
    >
      <span class="title">NEXT PAGE »</span>
      <br>
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </nav>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped>
  .post-tags a,
  .share-buttons,
  .paginav {
    display: block;
    border-radius: var(--radius);
    background: var(--code-bg);
    border: 1px solid var(--border)
  }
  .paginav #nuxt-link:hover {
    background: var(--border)
  }
  .paginav {
    margin: 10px 0;
    display: flex;
    line-height: 30px;
    border-radius: var(--radius);
  }

  .paginav #nuxt-link {
    padding-inline-start: 14px;
    padding-inline-end: 14px;
    border-radius: var(--radius);
  }

  .paginav .title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: small;
    color: var(--secondary);
  }

  .paginav .prev,
  .paginav .next {
    width: 50%;
  }

  .paginav span:hover:not(.title) {
    box-shadow: 0 1px 0;
  }

  .paginav .next {
    margin-inline-start: auto;
    text-align: right;
  }

  [dir="rtl"] .paginav .next {
    text-align: left;
  }
</style>
