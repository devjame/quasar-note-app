<template>
    <div class="q-px-md row">
        <!-- <form @submit.prevent='submitForm' class="col">
            <note-title :noteTitle.sync="note.title"/>
            <note-text-area ref="noteBody" :noteText.sync="note.body"/>
            <q-btn color="primary" label="Save" type="submit"/>
        </form> -->
        <note-toolbar
          :noteTitle.sync='note.title'
          @savenote="submitForm" />
        <note-editor
          v-if="render"
          :body.sync='note.body' />
        <note-render-view
          v-else
          :renderMarkdown.sync="renderMarkdown" />
    </div>
</template>
<script>
import marked from "marked"
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "EditorNoteView",
    data() {
        return {
            note: {
                title: '',
                body: ''
            }
        }
    }, 
    computed: {
        ...mapGetters({
            notes:'noteById'
            }),
        renderMarkdown() {
            return marked(this.note.body);
        },
        render() {
            return this.$store.getters.preview
        }
    },
    methods: {
        ...mapActions(['edditNote']),
        submitForm() {
            if(!this.note.body.length) {
                this.ErrorOnSave()
            } else {
                this.updateNote()
            }
        },
        updateNote() {
            this.$store.dispatch('editNote', this.note)
            //log(this.note)
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
        "note-editor": require("./Shared/NoteEditor.vue").default,
        "note-render-view": require("./Shared/NoteRender.vue").default,
        "note-toolbar": require("./Shared/NoteToolbar.vue").default
    },
    mounted() {
        this.note = Object.assign({}, this.notes(this.$route.params.id))
    },
}
</script>
<style lang="">
    
</style>