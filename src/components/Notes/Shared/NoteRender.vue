<template lang="">
    <div v-html="renderMarkdown" class=" preview q-pa-sm bg-grey-2 col">
        
    </div>
</template>
<script>
export default {
    props: ['renderMarkdown']
}
</script>
<style scope lang="scss">
    .preview {
        overflow-y: hidden;
        height: 300px;
    }
</style>