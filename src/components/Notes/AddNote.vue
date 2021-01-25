<template>
    <div class="q-px-md">
        <note-toolbar
          :noteTitle.sync='noteToSubmit.title'
          @savenote="submitForm" />
        <note-editor
          ref='noteBody'
          v-if="render"
          :body.sync="noteToSubmit.body" />
        <note-render-view
            v-else
            :renderNote.sync="renderNote" />
    </div>
</template>
<script>
import marked from "marked"
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            noteToSubmit: {
                title: '',
                body: ''
            }
        }
    },
    computed: {
        render() {
            return this.$store.getters.preview
        },
        renderNote() {
            return marked(this.noteToSubmit.body);
        }
    },
    methods: {
        ...mapActions(['addNote']),
        submitForm() {
            if(!this.noteToSubmit.body.length) {
                this.ErrorOnSave()
            } else {
                this.submitNote()
            }
        },
        submitNote() {
            this.$store.dispatch('addNote', this.noteToSubmit)
        },
        ErrorOnSave() {
            this.$q.dialog({
            title: 'Error',
            message: 'Write some note in order to save it.',
            cancel: true,
            persistent: true
            }).onOk(() => {
            }).onCancel(() => {
            // put an action for cancel event
            })
        }
    },
    components: {
        'note-render-view': require('components/Notes/Shared/NoteRender.vue').default,
        'note-editor': require('components/Notes/Shared/NoteEditor').default,
        "note-toolbar": require("./Shared/NoteToolbar.vue").default
    }
}
</script>
<style lang="">
    
</style>