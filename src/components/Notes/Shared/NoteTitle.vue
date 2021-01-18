<template>
    <q-input
        outlined
        :value="noteTitle"
        @input="$emit('update:noteTitle', $event)"
        class="q-mb-md title q-ml-xs"
        label="Title" />
</template>
<script>
export default {
    props: ['noteTitle']
}
</script>
<style scoped lang="scss">
    .title {
        height: 100%;
    }
</style>