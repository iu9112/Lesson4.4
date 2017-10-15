angular
  .module('PokemonApp')
  .factory('BarriesService', function($resource, $http) {

    return $resource('https://api.backendless.com/2F46B941-1E55-8E0B-FFE5-A17E9D730B00/F9CFDDBF-E7A9-E2CF-FF24-C02D9F26A400/data/Barries',
      { barrieId: '@barrieId' }, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function(responseData) {
          console.log(angular.fromJson(responseData));

          return angular.fromJson(responseData);
        }
      },
      update: {
        method: 'PUT'
      }
    })
  });
