(function(){

    angular
        .module('main')
        .factory('Flash', Flash);

    Flash.$inject = [];

    function Flash(){

        var messages = [];
        return {
            getMessage: getMessage,
            setMessage: setMessage
        };

        function getMessage(){

            return messages.shift();

        }

        function setMessage(message){

            messages.push(message);

        }

    }

})();

