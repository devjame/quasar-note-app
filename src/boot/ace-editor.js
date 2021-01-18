// import something here
import Vue from 'vue'
import VueDirectiveMarkdown from 'vue-directive-markdown'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  // something to do
  Vue.directive('decode', VueDirectiveMarkdown)
}
