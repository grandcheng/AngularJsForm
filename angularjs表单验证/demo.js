angular.module("myApp",[])
    .controller("SignUpController",function ($scope) {
        $scope.master = {username:"wuyucheng", password:"wuyucheng", password2:"wuyucheng"}
        // $scope.userdata = {}
        $scope.reset = function () {
            $scope.userdata = angular.copy($scope.master);
        }
        $scope.reset();
        $scope.submitForm = function () {
            console.log($scope.userdata);
        }
    })
    .directive('compare',function(){
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        }
        o.require = 'ngModel';
        o.link = function(sco, ele, att, con){
            con.$validators.compare = function(v){
                return v == sco.orgText;
            }
            sco.$watch('orgText', function(){
                con.$validate();
            })
        }
        return o;
    })