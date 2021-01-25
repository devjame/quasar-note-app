<template>
    <div 
        class="bg-grey-3 row relative-position q-mb-xs toolbar-container full-width">
        <q-input
            autofocus
            :value="noteTitle"
            @input="$emit('update:noteTitle', $event)"
            class="q-mb-xs q-ml-md col-4"
            label="Title" />
        <div class="text-center absolute-right q-ma-md">
            <q-btn
                @click="$emit('savenote')"
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
    props: ['noteTitle'],
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
    }
}
</script>
<style scoped lang="scss">
    .toolbar-container {
        border-radius: 5px;
    }
</style>