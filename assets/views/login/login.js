(function () {
    'use strict';

    // Usage:
    // Loading container.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: drl
        });

    drl.$inject = [];
    function drl() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();