<<template>
  <div>
    <div class="flex flex-row w-full justify-center pt-20">
      <ul class="flex lang-switch justify-around text-bold text-3xl" @click.prevent.stop="$i18n.setLocale(locale.code)">
        <li v-if="$i18n.locale !== 'en'">
          <nuxt-link class="text-md ..." :to="switchLocalePath('en')">EN</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'es'">
          <nuxt-link class="text-md ..." :to="switchLocalePath('es')">ES</nuxt-link>
        </li>
        <li v-if="$i18n.locale !== 'fr'">
          <nuxt-link class="text-md ..." :to="switchLocalePath('fr')">FR</nuxt-link>
        </li>
      </ul>
    </div>

    <a
      class="pb-20 pr-32"
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="$i18n.setLocale(locale.code)">{{ locale.name }} </a>

    <p class="text-5xl">{{ $t('welcome') }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>

<style scoped>

</style>
