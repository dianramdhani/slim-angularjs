(function() {
    'use strict';

    // Usage:
    // Error 404 container.

    window.app
        .component('Component', {
            template:'htmlTemplate',
            //templateUrl: 'templateUrl',
            controller: ControllerController,
            controllerAs: '$ctrl',
            bindings: {
                Binding: '=',
            },
        });

    ControllerController.$inject = ['dependency1'];
    function ControllerController(dependency1) {
        var $ctrl = this;
        

        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestroy = function() { };
    }
})();