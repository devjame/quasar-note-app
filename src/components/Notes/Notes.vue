<template>
    <q-item
        @click="editView(note.id)"
        clickable
        v-ripple>
          <q-item-section>
            <q-item-label lines=1>{{ note.title }}</q-item-label>
            <q-item-label caption lines=3>{{ note.body }}</q-item-label>
          </q-item-section>
            <q-item-section side top>
            <q-item-label caption>{{ note.created_at | dataFormater }}</q-item-label>
          </q-item-section>
          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn
                class="gt-xs text-blue"
                @click.stop="editView(note.id)"
                size="12px"
                flat
                dense
                round
                icon="edit" />
              <q-btn
                @click.stop="promptToDelete(note.id)"
                class="gt-xs text-red"
                size="12px"
                flat
                dense
                round
                icon="delete" />
            </div>
          </q-item-section>
      </q-item>
</template>
<script>
import { mapActions } from 'vuex'
import { api } from 'boot/axios'
 
export default {
  props:['note'],
  methods: {
    ...mapActions(['deleteNote']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Tens a certeza que queres eliminar?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        api.delete(`/note/${parseInt(id)}`)
      }).onCancel(() => {
        // put an action for cancel event
      })
    },
    editView (id) {
      this.$router.push({name: 'edit', params: {id: id}})
    }
  },
  filters: {
  dataFormater(value) { 
    return value.slice(0, 10)
  }
  }
}
</script>
<style>
    
</style>