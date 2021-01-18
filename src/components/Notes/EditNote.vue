<template>
    <div class="q-px-md row">
        <!-- <form @submit.prevent='submitForm' class="col">
            <note-title :noteTitle.sync="note.title"/>
            <note-text-area ref="noteBody" :noteText.sync="note.body"/>
            <q-btn color="primary" label="Save" type="submit"/>
        </form> -->
        <note-toolbar :NoteTitle.sync='note.title'/>
        <note-editor :body.sync='note.body'/>
        <note-render-view class="q-mx-md" :renderMarkdown.sync="renderMarkdown"/> 
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
        }
    },
    methods: {
        ...mapActions(['edditNote']),
        submitForm() {
            if(!this.$refs.noteBody.$refs.body.hasError) {
                this.updateNote()
            }
        },
        updateNote() {
            this.$store.dispatch('editNote', this.note)
            //log(this.note)
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