<template>
  <validation-observer
    v-slot="{ handleSubmit }"
    ref="observer"
  >
    <form @submit.prevent="handleSubmit(on_submit)">
      <validation-provider
        name="Nama sekolah / tempat kursus"
      >
        <div
          class="text--primary text-body mb-5"
          v-text="subtitle"
        />

        <v-text-field
          ref="search_school"
          v-model.lazy="search_school"
          :loading="sekolah.pending"
          :disabled="sekolah.pending"
          :clear-icon="$icon.mdiClose"
          :append-icon="$icon.mdiMagnify"
          solo
          rounded
          clearable
          placeholder="Input Sekolah / Tempat Kursus"
          class="input-shadow-primary"
          @input="$emit('search-input')"
          @click:append.prevent="handleSubmit(on_submit)"
        />
      </validation-provider>

      <slot />
    </form>
  </validation-observer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  data: () => ({
    subtitle: 'Cari sekolah / Tempat Kursus disini'
  }),
  computed: {
    ...mapFields('form', ['search_school']),
    ...mapGetters('sekolah', ['sekolah']),
    observer () { return this.$refs.observer },
    fieldSearch () { return this.$refs.search_school }
  },
  methods: {
    ...mapActions('sekolah', ['postSubmitSearchSchool']),
    async on_submit () {
      await this.postSubmitSearchSchool()
        .finally(() => {
          this.fieldSearch.blur()
          this.observer.reset()
          this.$emit('finally-submit')
        })
    }
  }
}
</script>
