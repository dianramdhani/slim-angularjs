(function () {
    'use strict';

    window.app
        .service('UtilService', UtilService);

    UtilService.$inject = ['$compile', '$rootScope'];
    function UtilService($compile, $rootScope) {
        this.drlAlert = drlAlert;

        /**
        * Alert with modal mode. Before call it, please create div id="drl-alert-container".
        * @param {String} type Required. Type of alert. The value is 'success' or 'info' or 'warning' or 'danger'.
        * @param {String} title Required. Type string. Title of alert.
        * @param {String} body Optional. Type string. Content of alert.
        * @param {Function} onClose Optional. Type function. Will be call when alert was closed.
        */
        function drlAlert(type, title, body, onClose = angular.noop) {
            let alertContainer = angular.element('#drl-alert-container'),
                alertComponent = `<drl-alert type="${type}" title="${title}" body="${body}" on-close="onClose()"></drl-alert>`,
                alertScope = Object.assign($rootScope.$new(), {
                    onClose: () => {
                        onClose();
                        alertScope.$destroy();
                    }
                });
            alertContainer.prepend($compile(alertComponent)(alertScope));
        }
    }
})();