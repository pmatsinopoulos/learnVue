let ComponentA = {
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

export default ComponentA;