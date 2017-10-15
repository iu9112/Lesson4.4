'use strict';

pokemonApp.controller('BarriesListCtrl', function($scope, BarriesService) {

  $scope.barries = BarriesService.query();

});
