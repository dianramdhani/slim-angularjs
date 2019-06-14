(function () {
    'use strict';

    // Usage:
    // Header container.

    window.app
        .component('drlHeader', {
            template: require('./drl-header.html'),
            controller: drl,
            bindings: {
                menu: '=',
                menuActiveNow: '='
            }
        });

    drl.$inject = ['$scope'];
    function drl($scope) {
        let $ctrl = this;
        const clearActive = () => {
            $ctrl.menu.sidebar.forEach(menu => {
                if (menu.hasOwnProperty('active')) {
                    menu.active = false;
                }
                if (menu.hasOwnProperty('menu')) {
                    menu.menu.forEach(_menu => {
                        if (_menu.hasOwnProperty('active')) {
                            _menu.active = false;
                        }
                    });
                }
            });
            $ctrl.menu.dropdownC.forEach(menu => {
                if (menu.hasOwnProperty('active')) {
                    menu.active = false;
                }
            })
            $ctrl.menuActiveNow = [];
        };

        $ctrl.$onInit = () => {
            const checkActive = () => {
                $ctrl.menuActiveNow = [];
                $ctrl.menu.dropdownC.forEach(menu => {
                    if (menu.hasOwnProperty('active')) {
                        if (menu.active) {
                            $scope.active(menu, menu.href);
                        }
                    }
                });
            };

            checkActive();
        };

        $scope.active = (element, href) => {
            clearActive();
            // go to href disini
            console.log({ href });
            $ctrl.menuActiveNow.push(element);
        };
    }
})();