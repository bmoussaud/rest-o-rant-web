var restorantControllers = angular.module('restorantControllers', []);

restorantControllers.controller('RestaurantSearchCtrl', ['$scope', function ($scope) {
  $scope.allRestaurants = [
      {'name': 'Anchor & Hope',
          'snippet': 'Once there was just St John, then former St John chefs started to create their own restaurants using the same template – head-to-tail ingredients in simple but artful combinations, served up in a relaxed setting. The Anchor & Hope, which opened more than a decade ago, is still showing how it’s done.'},
      {'name': 'Jugged Hare',
          'snippet': 'After years of very thin pickings, the Barbican has recently acquired not one but two classy gastropubs. This, and the Chiswell Street Dining Rooms (opened in 2011) are both part of Ed and Tom Martin’s ten-strong empire. The Jugged Hare was once called the King’s Head; it’s been handsomely remodelled, with a lovely oak floor, red leather seating and more than a scattering of stuffed and mounted animals.'},
      {'name': 'Old Red Cow',
          'snippet': 'The old red cow herself, if she wasn’t apocryphal, probably didn’t have a pleasant visit to this pub’s manor – Long Lane was an ancient cattle route to Smithfield meat market. You can see the cupolas, domes and reliefs of London’s temple of butchery through the front windows of this refurbed Victorian site, which no longer uses its antique ‘Ye Olde’ prefix and has turned its focus to serving very good beer. '}
  ];

  $scope.searchRestaurants = function(query) {
    if(query) {
      query = query.trim().toLowerCase();
    } else {
      query = ""
    }

    $scope.foundRestaurants = [];
    for(var i = 0; i < $scope.allRestaurants.length; i++) {
      if(!query || $scope.allRestaurants[i].name.toLowerCase().indexOf(query) > -1) {
        $scope.foundRestaurants.push($scope.allRestaurants[i]);
      }
    }
  }
}]);