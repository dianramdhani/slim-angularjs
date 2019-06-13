window.app = angular.module('SlimAngularJs', []);

// ROUTES

// SERVICES
require('../services/util.service');

// COMPONENTS
require('../components/drl-header/drl-header');
require('../components/drl-sidebar/drl-sidebar');
require('../components/drl-footer/drl-footer');
require('../components/drl-pageheader/drl-pageheader');
require('../components/drl-alert/drl-alert');

// VIEWS
require('../views/drl-test1/drl-test1');
require('../views/drl-test2/drl-test2');