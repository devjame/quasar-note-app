<template>
    <q-page class="q-pa-md">
        <add-note-view />
    </q-page>
</template>
<script>
export default {
    components: {
        'add-note-view': require('components/Notes/AddNote.vue').default
    }
}
</script>
<style>
    
</style>