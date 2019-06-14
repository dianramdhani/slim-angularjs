(function () {
    'use strict';

    // Usage:
    // Loading container.

    window.app
        .component('drlLoading', {
            template: require('./drl-loading.html'),
            controller: drl,
            bindings: {
                Binding: '=',
            },
        });

    drl.$inject = [];
    function drl() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();