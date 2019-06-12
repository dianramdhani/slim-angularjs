(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('drlTest1', {
            template: require('./drl-test1.html'),
            controller: drl
        });

    drl.$inject = [];
    function drl() {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();