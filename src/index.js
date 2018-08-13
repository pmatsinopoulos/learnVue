import Vue from 'vue';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);
  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // strip the leading './' and extension from filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  Vue.component(
    componentName,
    // Look for the component options on "default", which will
    // exist if the component was exported with "export default",
    // otherwise,  fall back to module's root
    componentConfig.default || componentConfig
  )
});

const vm = new Vue({
  el: '#app'
});

export default vm;