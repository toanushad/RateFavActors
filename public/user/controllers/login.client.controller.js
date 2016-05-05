(function(){

    angular
        .module('users')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['Flash', '$window', 'userMgr', '$location', '$timeout'];

    function LoginController(Flash, $window, userMgr, $location, $timeout){

        var loginCtrl = this;
        loginCtrl.flashMessage = Flash.getMessage();
        loginCtrl.login = login;

        function login(){

            userMgr
                .login(loginCtrl.user.username, loginCtrl.user.password)
                .then(successCallback)
                .catch(errorCallback);

            function successCallback(response){

                var data = response.data;
                userMgr.setUser(data.user);
                userMgr.setLoggedIn(true);
                $window.sessionStorage.token = data.token;
                $window.sessionStorage.user = JSON.stringify(data.user);
                $location.path('/');

            }

            function errorCallback(error){

                loginCtrl.user = {};
                Flash.immediateMessage = "Invalid username/password";
                $timeout(function(){
                    loginCtrl.errorMessage = '';
                },5000);

            }

        }

    }

})();

