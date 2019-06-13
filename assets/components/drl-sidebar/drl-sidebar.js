(function () {
    'use strict';

    // Usage:
    // Sidebar container.
    // Creates:
    // Add class="slim-sidebar" inside tag.

    window.app
        .component('drlSidebar', {
            template: require('./drl-sidebar.html'),
            controller: drl,
            bindings: {
                menu: '=',
                menuActiveNow: '='
            },
        });

    drl.$inject = ['$scope'];
    function drl($scope) {
        let $ctrl = this,
            clearActive = () => {
                $ctrl.menu.forEach(menu => {
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
                $ctrl.menuActiveNow = [];
            };
        $ctrl.$onInit = () => { console.log($ctrl.menu) };

        $scope.active = (element, href, elementParent = null) => {
            if (!element.hasOwnProperty('menu')) {
                clearActive();
                element['active'] = true;
                // go to href disini
                $ctrl.menuActiveNow.push(element);
            }
            if (elementParent !== null) {
                elementParent['active'] = true;
                $ctrl.menuActiveNow.push(elementParent);
            }
        };
    }
})();