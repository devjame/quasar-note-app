<template>
    <editor
        :value="body"
        ref="aceeditor"
        @input="$emit('update:body', $event)"
        @init="editorInit"
        lang="markdown"
        theme="github"
        :height="height" />
</template>
<script>
export default {
    name: 'NoteEditor',
    props: ['body'],
    data() {
        return {
            height: window.innerHeight - 150
        }
    },
    methods: {
        editorInit() {
            require("brace/ext/language_tools");
            require("brace/mode/markdown");
            require("brace/theme/github");
        }
    },
    components: {
        'editor': require('vue2-ace-editor')
    }
}
</script>
