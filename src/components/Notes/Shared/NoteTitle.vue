<template>
    <q-input
        outlined
        :value="noteTitle"
        @input="$emit('update:noteTitle', $event)"
        class="q-mb-md"
        label="Title" />
</template>
<script>
export default {
    props: ['noteTitle']
}
</script>
<style>
    
</style>