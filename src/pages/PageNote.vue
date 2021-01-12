<template>
  <q-page class="q-pa-md">
      <q-list bordered separator>
        <note
          v-for="note in notes"
          :key="note.id"
          :note="note"></note>
      </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['notes'])
  },
  components: {
    'note': require('components/Notes/Notes.vue').default
  }
}
</script>
