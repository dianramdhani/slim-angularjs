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

    drl.$inject = ['$scope', '$timeout', 'UtilService'];
    function drl($scope, $timeout, UtilService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            UtilService.drlAlert('danger', 'ini title1', 'ini body', () => {
                console.log('alert1 telah di close');
            });
            UtilService.drlAlert('success', 'ini title2', 'ini body', () => {
                console.log('alert2 telah di close');
            });
        };
    }
})();