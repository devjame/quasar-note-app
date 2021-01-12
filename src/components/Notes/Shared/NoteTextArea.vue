<template>
    <q-input
        ref="body"
        :value="noteText"
        @input="$emit('update:noteText', $event)"
        filled
        type="textarea"
        :rules="[val => !!val || 'Field is required']"
        placeholder="Enter your note..."
        />
</template>
<script>
export default {
    props: ['noteText']
}
</script>
<style lang="scss">
    .q-textarea {
        .q-field__native {
            height: 62vh;
            resize: none;
        }
    }
</style>