'use strict';

require('prismjs');

var Vue = require('vue');
var VueSimpleValidator = require('../src');
var App = require('./vue/App.vue');

Vue.use(VueSimpleValidator);

Vue.component('LeftNavBar', require('./vue/LeftNavBar.vue'));
Vue.component('MainContent', require('./vue/MainContent.vue'));
Vue.component('DemoWithCode', require('./vue/DemoWithCode.vue'));

// chapters
Vue.component('GettingStarted', require('./vue/chapters/GettingStarted.vue'));
Vue.component('UsagesAndExamples', require('./vue/chapters/UsagesAndExamples.vue'));
Vue.component('APIAndReference', require('./vue/chapters/APIAndReference.vue'));

// examples
Vue.component('BasicExample', require('./vue/examples/BasicExample.vue'));
Vue.component('BuiltinRulesExample', require('./vue/examples/BuiltinRulesExample.vue'));
Vue.component('CustomRuleExample', require('./vue/examples/CustomRuleExample.vue'));
Vue.component('CrossFieldValidationExample1', require('./vue/examples/CrossFieldValidationExample1.vue'));
Vue.component('CrossFieldValidationExample2', require('./vue/examples/CrossFieldValidationExample2.vue'));
Vue.component('AsyncValidationExample1', require('./vue/examples/AsyncValidationExample1.vue'));
Vue.component('AsyncValidationExample2', require('./vue/examples/AsyncValidationExample2.vue'));

new Vue({
  el: '#app',
  render: function (h) {
    return h(App);
  }
});
