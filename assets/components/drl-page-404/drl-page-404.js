(function () {
    'use strict';

    // Usage:
    // Error 404 container.

    window.app
        .component('drlPage404', {
            template: require('./drl-page-404.html'),
            controller: drl
        });

    drl.$inject = [];
    function drl() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();