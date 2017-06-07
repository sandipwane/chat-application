/* global angular, io */
var app = angular.module('app', [])

app.controller('MainController', ['$scope', function ($scope) {
  var socket = io()
  $scope.messages = []

  $scope.sendMessage = function (message) {
    socket.emit('chat message', message)
  }
  socket.on('chat message', function (message) {
    console.log('received message', message)
    $scope.$apply(function (params) {
      $scope.messages.push(message)
      $scope.message = ''
    })
  })
}])
