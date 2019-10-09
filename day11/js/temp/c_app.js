'use strict';

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _allFooter = require('./allFooter');

var _allFooter2 = _interopRequireDefault(_allFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.directive('focus', {
    inserted: function inserted(el, binding) {
        el.focus();
    }
});

Vue.directive('todo-focus', {
    update: function update(el, binding) {
        if (binding.value) {
            el.focus();
        }
    }
});

var app = new Vue({
    el: '#app',
    components: {
        App: _main2.default,
        allFooter: _allFooter2.default
    },
    data: {
        hashText: ''
    },
    template: '<div><App :hashText="hashText" /><all-footer /></div>'
});

window.onhashchange = function () {
    app.hashText = window.location.hash.slice(2);
    console.log(app.hashText);
};

window.onhashchange();