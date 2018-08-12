var ComponentA = {
  data: function() {
    return {
      name: 'component a'
    }
  },
  props: ['displayName'],
  template: '\
    <div>{{ name }}, {{ displayName }}</div>\
  '
};

var vm = new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA
  }
});