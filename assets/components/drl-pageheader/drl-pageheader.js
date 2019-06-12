(function () {
    'use strict';

    // Usage:
    // Page Header container.
    // Creates:
    // 

    window.app
        .component('drlPageheader', {
            template: require('./drl-pageheader.html'),
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