<template>
    <div class="q-px-md">
        <note-toolbar />
        <note-editor :body.sync="noteToSubmit.body"/>
        <note-render-view class="q-mx-md" :renderNote.sync="renderNote"/>
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
        renderNote() {
            return marked(this.noteToSubmit.body);
        }
    },
    methods: {
        ...mapActions(['addNote']),
        submitForm() {
            if(!this.$refs.noteBody.$refs.body.hasError) {
                this.submitNote()
            }
        },
        submitNote() {
            this.$store.dispatch('addNote', this.noteToSubmit)
        }
    },
    components: {
        /* 'note-title': require('components/Notes/Shared/NoteTitle.vue').default,
        'note-text-area': require('components/Notes/Shared/NoteTextArea.vue').default,
        'note-render-view': require('components/Notes/Shared/NoteRender.vue').default */
        'note-editor': require('components/Notes/Shared/NoteEditor').default,
        "note-toolbar": require("./Shared/NoteToolbar.vue").default
    }
}
</script>
<style lang="">
    
</style>