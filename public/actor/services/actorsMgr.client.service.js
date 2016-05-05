(function(){

    angular
        .module('actors')
        .factory('actorsMgr', actorsMgr);

    actorsMgr.$inject = ['$http'];

    function actorsMgr($http){

        return {
            addActor: addActor,
            getActors: getActors,
            addToFavourites: addToFavorites,
            addRating: addRating
        };


        function addActor(actor){

            return $http.post('/ActorsDbApi/actors', actor);

        }


        function getActors(){

            return $http.get('/ActorsDbApi/actors');

        }


        function addToFavorites(actorId){

            return $http.post('/ActorsDbApi/actors/'+actorId+"?action=like");

        }


        function addRating(actorId, userRating){

            return $http.post('/ActorsDbApi/actors/'+actorId+"/ratings", {userRating: userRating});

        }

    }

})();

