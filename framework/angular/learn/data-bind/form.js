/**
 * Created by Administrator on 2016/3/5 0005.
 */
var userInfoModule = angular.module("userInfoModule",[]);
userInfoModule.controller("userInfoCtrl",function($scope){
    $scope.userInfo = {
        email:"123@163.com",
        password:"123",
        autoLogin:true
    }
    $scope.getFormData = function(){
        console.log($scope.userInfo);
    }
})
