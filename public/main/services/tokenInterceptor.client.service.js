(function(){

    angular
        .module('main')
        .factory('TokenInterceptor', TokenInterceptor);

    TokenInterceptor.$inject = ['$window', '$injector'];

    function TokenInterceptor($window, $injector){

        return {
            request: request,
            response: response
        };

        function request(config){

            config.headers = config.headers || {};

            if($window.sessionStorage.token){
                config.headers['x-access-token'] = $window.sessionStorage.token;
            }
            return config;

        }


        function response(response){

            var userMgr = $injector.get('userMgr');
            if(response != null && response.status == 200 && $window.sessionStorage.token && !userMgr.isLoggedIn()){
                userMgr.setLoggedIn(true);
            }
            return response;

        }

    }

})();

