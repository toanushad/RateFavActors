(function(){

    angular
        .module('actors')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){

        $routeProvider
            .when('/actors', {
                templateUrl:'actor/views/actors.client.view.html',
                controller:'ActorsController',
                controllerAs:'actorsCtrl',
                resolve:{
                    actors: getActors
                }
            });

    }


    getActors.$inject = ['$location', 'userMgr', 'actorsMgr'];

    function getActors($location, userMgr, actorsMgr){

        if(userMgr.getUser() === null) {
            $location.path('/login');
            return;
        }

        return actorsMgr.getActors()
            .then(successCallBack)
            .catch(errorCallBack);

        function successCallBack(response){
            return response.data;
        }

        function errorCallBack(error){
            console.log(error);
        }

    }

})();

