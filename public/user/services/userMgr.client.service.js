(function() {

    angular
        .module('users')
        .factory('userMgr', userMgr);

    userMgr.$inject = ['$http', '$window'];

    function userMgr($http, $window){

        var user = $window.sessionStorage.user ? JSON.parse( $window.sessionStorage.user ) : null;
        var loggedIn = user ? true : false;

        return {
            signUp: signUp,
            getUser: getUser,
            setUser: setUser,
            isLoggedIn: isLoggedIn,
            setLoggedIn: setLoggedIn,
            login: login,
            logout: logout
        };


        function signUp(user){

            return $http.post('/ActorsDbApi/users', user );

        }


        function getUser(){
            return user;
        }


        function setUser(u){
            user = u;
        }


        function isLoggedIn(){
            return loggedIn;
        }


        function setLoggedIn(ln){
            loggedIn = ln;
        }


        function login(username, password){

            return $http.post('/ActorsDbApi/login', {username: username, password: password});

        }


        function logout(){

            setUser(null);
            setLoggedIn(false);
            delete $window.sessionStorage.token;
            delete $window.sessionStorage.user;

        }

    }

})();

