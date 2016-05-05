(function(){

    angular
        .module('users')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['userMgr', 'Flash', '$location'];

    function SignUpController(userMgr, Flash, $location){

        var signUpCtrl = this;
        signUpCtrl.signUp = signUp;
        signUpCtrl.resetForm = resetForm;

        function signUp(isValid){
            // checking validation
            if(! isValid){
                alert("User validation error");
                return;
            }

            userMgr.signUp(signUpCtrl.user)
                .then(successCallBack)
                .catch(errorCallBack);

            function successCallBack(response){
                var user = response.data;
                Flash.setMessage(user.firstName+ ", Thanks for signing up. Login now");
                $location.path('/login');
            }

            function errorCallBack(error){
                console.log(error);
            }

        }


        function resetForm(){

            signUpCtrl.user={};
            signUpCtrl.form.$setPristine();

        }

    }

})();

