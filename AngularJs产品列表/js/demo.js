angular.module("product",[])
        .service("productData",function () {
            return [
                {
                    id : 1,
                    name : "产品1",
                    price : 200
                },
                {
                    id : 2,
                    name : "产品2",
                    price : 100
                },
                {
                    id : 3,
                    name : "产品3",
                    price : 400
                },
                {
                    id : 4,
                    name : "产品4",
                    price : 300
                },
            ]
        })
        .controller("productController",function ($scope,productData) {
            $scope.productData = productData;
            $scope.orderType = "id";
            $scope.order = "-"//默认id降序
            $scope.changeOrder = function (type) {
                $scope.orderType = type;
                if ($scope.order === ""){
                    $scope.order = "-";
                }else {
                    $scope.order = "";
                }
            }
        })