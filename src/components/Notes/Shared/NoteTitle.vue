<template>
    <q-input
        autofocus
        :value="noteTitle"
        @input="$emit('update:noteTitle', $event)"
        class="q-mb-xs q-ml-md"
        label="Title" />
</template>
<script>
export default {
    props: ['noteTitle']
}
</script>
<style scoped lang="scss">
</style>