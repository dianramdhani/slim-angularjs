(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('drlTest3', {
            template: require('./drl-test3.html'),
            controller: drl,
        });

    drl.$inject = [];
    function drl() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();