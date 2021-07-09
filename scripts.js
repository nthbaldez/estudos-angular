var app = angular.module('myApp', []);
        app.controller('myCtrl', ['$scope', function ($scope){
            $scope.list = [];
            
            $scope.addToDoList = function(){
                
                $scope.list.push($scope.toDoList);
                $scope.toDoList = "";
            }
        
    }]);
        