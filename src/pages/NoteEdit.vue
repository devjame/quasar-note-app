<template>
    <q-page class="q-pa-md">
        <edit-note-view />
    </q-page>
</template>
<script>
export default {
    components: {
        'edit-note-view': require('components/Notes/EditNote.vue').default
    }
}
</script>
<style>
    
</style>