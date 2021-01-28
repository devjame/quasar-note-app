<template>
  <q-layout view="hHh lpR lFf">

    <q-drawer
      show-if-above
      v-model="drawer"
      :width="350"
      :breakpoint="400"
      bordered>
      <div class="text-center bg-transparent">
          <h1 class="logo">To Note</h1>
      </div>
      <q-scroll-area :style="scrollAreaStyle">
          <q-list padding>
            <q-spinner
            class="absolute-center"
            v-if="data == null"
              color="primary"
              size="3em"
            />
            <note
              v-else
              v-for="note in data['data']"
              :key="note.id"
              :note="note">
            </note>
          </q-list>
        </q-scroll-area>
        <div class="absolute-bottom text-center q-pb-lg bg-transparent">
         <q-btn
            to="/new_note"
            round
            color="primary"
            dense
            size="20px"
            icon="add" />
        </div>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.path"/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { api } from 'boot/axios'

export default {
  data () {
    return {
      drawer: false,
      scrollAreaStyle: {
        height: "calc(100% - 150px)",
        marginBottom: "40px"
      },
      data: null
    }
  },
  computed: {
    ...mapGetters(['notes'])
  },
  components: {
    'note': require('components/Notes/Notes.vue').default
  },
  mounted() {
    api.get('/notes')
    .then(resp => (this.data = resp.data))
  }
}
</script>
<style lang="scss">
  .q-drawer__content {
    background: linear-gradient(to bottom, #294666 0%,#254566 16%,#1d4066 100%);
    color: #ffffff;
  }
</style>