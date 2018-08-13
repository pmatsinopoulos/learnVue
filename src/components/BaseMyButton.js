const BaseMyButton = {
  data: function() {
    return {

    }
  },
  props: ['button-value'],
  template: '\
    <button>{{ buttonValue }}</button>\
  \
  '
};

export default BaseMyButton;