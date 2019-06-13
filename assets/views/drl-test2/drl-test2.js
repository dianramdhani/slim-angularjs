(function () {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    window.app
        .component('drlTest2', {
            template: require('./drl-test2.html'),
            controller: drl
        });

    drl.$inject = ['$timeout', 'UtilService'];
    function drl($timeout, UtilService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            UtilService.drlAlert('danger', 'ini title1', 'ini body', () => {
                console.log('alert1 telah di close');
            });
            UtilService.drlAlert('danger', 'ini title2', 'ini body', () => {
                console.log('alert1 telah di close');
            });
        };
    }
})();