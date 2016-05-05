(function(){

    angular
        .module('main')
        .controller('MainController', MainController);

    MainController.$inject = ['userMgr', '$rootScope', '$timeout', '$location'];

    function MainController(userMgr, $rootScope, $timeout, $location){

        var mainCtrl = this;
        mainCtrl.userMgr = userMgr;
        mainCtrl.isAppLoading=false;
        mainCtrl.logout = logout;

        function logout(){

            userMgr.logout();
            $location.url('/');
        }


        $rootScope.$on('$routeChangeStart',function(){

            mainCtrl.isAppLoading=true;

        });


        $rootScope.$on('$routeChangeSuccess',function(){

            $timeout(function(){
                mainCtrl.isAppLoading=false;
            },250);

        });

    }

})();

