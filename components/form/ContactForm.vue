<template>
  <validation-observer
    ref="observer"
    v-slot="{ handleSubmit }"
  >
    <form @submit.prevent="handleSubmit(on_submit)">
      <validation-provider
        v-slot="{ errors }"
        name="nama"
        rules="required"
      >
        <v-text-field
          v-model="name"
          :error-messages="errors"
          :loading="pending"
          label="Nama"
          placeholder="Masukan nama anda"
          filled
          required
          clearable
          class="input-filled-shadow-primary"
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          :loading="pending"
          label="Email"
          type="email"
          placeholder="Masukan email anda"
          filled
          required
          clearable
          class="input-filled-shadow-primary"
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="pesan"
        rules="required"
      >
        <v-textarea
          v-model="message"
          :error-messages="errors"
          :loading="pending"
          label="Pesan"
          placeholder="Masukan pesan anda"
          filled
          required
          clearable
          class="input-filled-shadow-primary"
        />
      </validation-provider>

      <div class="text-center">
        <v-btn
          large
          rounded
          type="submit"
          color="primary"
          :disabled="pending"
          class="btn-send px-sm-10"
        >
          Kirim
        </v-btn>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields('form', [
      'contact.name',
      'contact.email',
      'contact.message',
      'pending'
    ]),
    observer () { return this.$refs.observer }
  },
  methods: {
    async on_submit () {
      await this.postContactUs()
        .finally(() => {
          this.observer.reset()
        })
    },
    ...mapActions('form', [
      'postContactUs'
    ])
  }
}
</script>

<style lang="scss" scoped>
.btn-send {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    width: 343px !important;
  }
}
</style>
