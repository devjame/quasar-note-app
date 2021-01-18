<template>
    <div class="bg-grey-3 row q-mb-xs toolbar-container round full-width">
        <note-title class="col-4" :noteTitle.sync='NoteTitle' />
        <div class="text-center col-6">
        </div>
    </div>
</template>
<script>
export default {
    props: ['NoteTitle'],
    data() {
        return {
            render: false
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