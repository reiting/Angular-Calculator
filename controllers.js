angular.module('RachelsCalculator', [])
    .controller('CalculatorC', ['$scope', function ($scope) {

        $scope.value = {
            val1: '',
            val2: '',
            answer: '',
        }


        function validateForm() {
            var x = document.getElementById('input1').value;
            var y = document.getElementById('input2').value;
            if (x == null || x == "") {
                alert('oops you forgot a number');
                return false;
            } else if (y == null || y == "") {
                alert('oops you forgot a number');
            }
        }

        function clearForm() {
            $scope.value.val1="";
            $scope.value.val2="";

        }

        //adds values together
        //add operation so you can put in html
        $scope.add = function () {
            var value1 = $scope.value.val1;
            var value2 = $scope.value.val2;
            var result = value1 + value2;
            $scope.value.answer = result;

            clearForm();
            validateForm();

        }
        //subtracts values from each other
        $scope.subtract = function () {
            var value1 = $scope.value.val1;
            var value2 = $scope.value.val2;
            var result = value1 - value2;
            $scope.value.answer = result;

            clearForm();
            validateForm();

        }
        //multiplies values
        $scope.multiply = function () {
            var value1 = $scope.value.val1;
            var value2 = $scope.value.val2;
            var result = value1 * value2;
            $scope.value.answer = result;
            
            clearForm();
            validateForm();

        }
        //divides values
        $scope.divide = function () {
            var value1 = $scope.value.val1;
            var value2 = $scope.value.val2;
            var result = value1 / value2;
            $scope.value.answer = result;
            
            clearForm();
            validateForm();

            var y = document.getElementById('input2').value;
            if(y==0) {
                alert('cannot divide by zero!');
            }

        }


    }])

