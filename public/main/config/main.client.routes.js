(function(){

    angular
        .module('main')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){

        $routeProvider
            .when('/', {
                templateUrl:'main/views/main.client.view.html',
                controller:'MainController',
                controllerAs:'mainCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });

    }

})();

