<template>
    <editor
        :value="body"
        ref="aceeditor"
        @input="$emit('update:body', $event)"
        @init="editorInit"
        lang="markdown"
        theme="dracula"
        :height="height" />
</template>
<script>
export default {
    name: 'NoteEditor',
    props: ['body'],
    data() {
        return {
            body: '',
            height: window.innerHeight - 100
        }
    },
    methods: {
        editorInit() {
            require("brace/ext/language_tools");
            require("brace/mode/markdown");
            require("brace/theme/dracula");
        }
    },
    components: {
        'editor': require('vue2-ace-editor')
    }
}
</script>
