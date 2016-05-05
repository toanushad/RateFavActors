(function(){

    angular
        .module('actors')
        .controller('ActorsController', ActorsController);

    ActorsController.$inject=['actors', 'actorsMgr', '$uibModal', '$scope'];

    function ActorsController(actors, actorsMgr, $uibModal, $scope){

        var actorsCtrl = this;
        actorsCtrl.actors = actors;
        actorsCtrl.sendingNewActor = false;
        actorsCtrl.openModal = openModal;
        actorsCtrl.closeModal = closeModal;
        actorsCtrl.addActor = addActor;
        actorsCtrl.addToFavorites = addToFavorites;
        actorsCtrl.addRating = addRating;

        actorsCtrl.pagination = {
            currentPage: 1,
            numPerPage: 10,
            maxSize: 5,
            filterText: ""
        };


        function openModal() {

            actorsCtrl.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'myModal.html',
                scope: $scope
            });

        }


        function addActor(isValid){

            if(!isValid == true)
                return;
            actorsCtrl.sendingNewActor = true;
            actorsMgr.addActor(actorsCtrl.newActor)
                .then(successCallBack)
                .catch(errorCallBack);

            function successCallBack(response){
                actorsCtrl.actors.push(response.data);
                actorsCtrl.sendingNewActor = false;
                actorsCtrl.newActor = {};
                actorsCtrl.modal.$setPristine();
                actorsCtrl.closeModal();
            }

            function errorCallBack(error){
                alert("Something went wrong. Try again");
            }

        }


        function addToFavorites(index){

            var actor = actorsCtrl.actors[index];
            actorsMgr.addToFavorites(actor._id)
                .then(successCallBack)
                .catch(errorCallBack);

            function successCallBack(response){
                actorsCtrl.actors[index] = response.data
            }

            function errorCallBack(error){
                alert("Something went wrong. Try again");
            }

        }


        function addRating(index, userRating){

            actorsMgr.addRating(actorsCtrl.actors[index]._id, userRating)
                .then(successCallBack)
                .catch(errorCallBack);

            function successCallBack(response){
                console.log(response.data);
                actorsCtrl.actors[index].userRating = response.data.userRating;
            }

            function errorCallBack(error){
                alert("Something went wrong. Try again");
            }

        }


        function closeModal(){

            actorsCtrl.modalInstance.dismiss('close');

        }

    }

})();

