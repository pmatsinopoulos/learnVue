import Vue from 'vue/dist/vue.esm';

Vue.config.devtools = true;

Vue.component('my-button', {
  data: function() {
    return {
    }
  },
  props: ['button-value'],
  template: '\
    <button>{{ buttonValue }}</button>\
  \
  '
});

let vm = new Vue({
  el: '#app',
});

export default vm;