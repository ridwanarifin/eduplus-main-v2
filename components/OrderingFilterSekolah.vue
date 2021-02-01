<template>
  <div>
    <v-menu
      bottom
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            color="primary"
            class="mr-2"
            v-text="ordering_school === 'asc'
              ? $icon.mdiOrderAlphabeticalAscending
              : $icon.mdiOrderAlphabeticalDescending"
          />
          <span>
            Urutkan
          </span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item-group
          v-model="ordering_school"
          color="primary"
        >
          <v-list-item
            v-for="(item, index) in orderItems"
            :key="index"
            :value="item.value"
          >
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-btn text>
      <v-icon
        color="primary"
        class="mr-1"
        v-text="$icon.mdiFilterOutline"
      />
      <span>
        Filter
      </span>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  data: () => ({
    orderItems: [{
      title: 'Abjad A-Z',
      value: 'asc'
    }, {
      title: 'Abjad Z-A',
      value: 'desc'
    }]
  }),
  computed: {
    ...mapGetters({
      sekolah: 'sekolah/sekolah',
      context: 'context_search_address'
    }),
    ...mapFields('form', [
      'ordering_school'
    ])
  },
  watch: {
    ordering_school (newVal) {
      this.setOrdering(newVal)
    }
  },
  methods: {
    ...mapMutations({
      setOrdering: 'sekolah/SET_ORDERING'
    })
  }
}
</script>
