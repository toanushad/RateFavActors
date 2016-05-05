(function(){

    angular
        .module('users')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){

        $routeProvider
            .when('/login', {
                templateUrl: 'user/views/login.client.view.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .when('/signup', {
                templateUrl: 'user/views/signup.client.view.html',
                controller: 'SignUpController',
                controllerAs: 'signUpCtrl'
            });

    }

})();

