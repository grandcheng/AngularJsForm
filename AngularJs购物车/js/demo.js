angular.module("myApp",[])
    .controller("cartController",function ($scope) {
        $scope.cart= [
            {
                id:1,
                name:"商品1",
                quantity:2,
                price:100
            },
            {
                id:2,
                name:"商品2",
                quantity:3,
                price:300
            },
            {
                id:3,
                name:"商品3",
                quantity:4,
                price:3000
            },
            {
                id:4,
                name:"商品4",
                quantity:5,
                price:6000
            },
        ];
        /**
         * 总价
         * @returns {number}
         */
        $scope.totalPrice = function () {
            var total = 0;
            angular.forEach($scope.cart,function (data) {
                total += data.quantity * data.price;
            })
            return total;
        }
        /**
         * 总数
         * @returns {number}
         */
        $scope.totalQuantity = function () {
            var total = 0;
            angular.forEach($scope.cart,function (data){
                total += parseInt(data.quantity);
            })
            return total;
        }
        /**
         * 移除
         * @param id
         */
        $scope.remove = function (id) {
            var temp = findIndex(id)
            if (temp !== -1){
                $scope.cart.splice(temp,1);
            }
        }
        /**
         * 添加数量
         * @param id
         */
        $scope.add = function (id) {
            var temp = findIndex(id);
            if (temp !== -1){
                $scope.cart[temp].quantity++;
            }
        }
        /**
         * 减少数量
         * @param id
         */
        $scope.reduce = function (id) {
            var temp = findIndex(id);
            if (temp !== -1){
                if ($scope.cart[temp].quantity > 1) {
                    $scope.cart[temp].quantity--;
                }else {
                    var returnKey = confirm("确认？");
                    if (returnKey){
                        $scope.remove(id);
                    }
                }
            }
        }
        /**
         * 只能输入数字和退格
         * @param e
         */
        $scope.clearNoNum = function (e) {
            var ss = window.event || e;
            if (!((ss.keyCode>47 && ss.keyCode<58) || ss.keyCode == 8 || (ss.keyCode>95 && ss.keyCode<106))){
                ss.preventDefault();
            }
        }
        $scope.$watch("cart",function (newValue,oldValue) {
            angular.forEach(newValue,function (data,index) {
                if (data.quantity < 1){
                    var returnKey = confirm("确认？");
                    if (returnKey){
                        $scope.remove(data.id);
                    }else {
                        data.quantity = oldValue[index].quantity;
                    }
                    return;
                }
            })
        },true)
        /**
         * 找一个元素的索引
         */
        var findIndex = function (id) {
            var temp = -1;
            angular.forEach($scope.cart,function (data,index) {
                if(data.id === id) {
                    temp = index;
                }
            });
            return temp
        }
    })