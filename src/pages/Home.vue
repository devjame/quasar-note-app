<template>
  <q-page class="q-pa-md">
      <div class="absolute-center text-center">
        <p></p>
        <q-btn
          to="/new_note"
          color="primary"
          class="q-mb-md"
          outline
          label="New Note" />
        <p class="text-grey-7">Ou selecione uma nota ao lado para editor.</p>
      </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

}
</script>
