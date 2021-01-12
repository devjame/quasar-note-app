<template>
    <div class="q-px-md row">
        <form @submit.prevent='submitForm' class="col">
            <note-title :noteTitle.sync="note.title"/>
            <note-text-area ref="noteBody" :noteText.sync="note.body"/>
            <q-btn color="primary" label="Save" type="submit"/>
        </form>
        <note-render-view class="q-mx-md" :renderNote.sync="renderNote"/>
    </div>
</template>
<script>
import marked from "marked"
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            note: {}
        }
    }, 
    computed: {
        ...mapGetters({
            notes:'noteById'
            }),
        renderNote() {
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
        'note-title': require('components/Notes/Shared/NoteTitle.vue').default,
        'note-text-area': require('components/Notes/Shared/NoteTextArea.vue').default,
        'note-render-view': require('components/Notes/Shared/NoteRender.vue').default
    },
    mounted() {
        this.note = Object.assign({}, this.notes(this.$route.params.id))
    },
}
</script>
<style lang="">
    
</style>