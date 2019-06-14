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
require('../components/drl-wrapper/drl-wrapper');
require('../components/drl-widget1/drl-widget1');
require('../components/drl-loading/drl-loading');
require('../components/drl-page-404/drl-page-404');

// VIEWS
require('../views/drl-test1/drl-test1');
require('../views/drl-test2/drl-test2');
require('../views/drl-test3/drl-test3');
require('../views/login/login');