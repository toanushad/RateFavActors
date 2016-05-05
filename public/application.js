(function(){

    angular
        .module('ActorsDB',['ngRoute', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 'main', 'users', 'actors'])
        .config(config);

    config.$inject=['$locationProvider', '$httpProvider'];

    function config($locationProvider, $httpProvider){

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('TokenInterceptor');

    }

    angular.element(document).ready(function(){
        angular.bootstrap(document, ['ActorsDB']);
    });

})();
