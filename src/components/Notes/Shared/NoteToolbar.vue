<template>
    <div 
        class="bg-grey-3 row relative-position q-mb-xs toolbar-container round full-width">
        <note-title class="col-4" :noteTitle.sync='NoteTitle' />
        <div class="text-center absolute-right q-ma-md">
            <q-btn
                @click="$emit('saveNote')"
                dense
                round
                color="primary"
                icon='check'
                class="q-mr-md" />
            <q-btn
              dense
              @click="toogleRender"
              color="white"
              text-color="black">
                {{ renderText }}
              </q-btn>
        </div>
    </div>
</template>
<script>
export default {
    props: ['NoteTitle'],
    data() {
        return {
            renderText: 'Preview'
        }
    },
    methods: {
        toogleRender() {
            let render = this.$store.getters.preview
            if (!render) {
                this.renderText = 'Preview'
                this.$store.dispatch('tooglePreview', true)
            }
            else {
                this.renderText = 'Editor'
                this.$store.dispatch('tooglePreview', false)
            }
        }
    },
    components: {
        "note-title": require("./NoteTitle.vue").default
    }
}
</script>
<style scoped lang="scss">
    .toolbar-container {
        border-radius: 5px;
    }
</style>