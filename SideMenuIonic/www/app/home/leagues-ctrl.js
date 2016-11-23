(function () {
    'use strict';

    angular.module('eliteApp').controller('LeaguesCtrl', ['$state','eliteApi', LeaguesCtrl]);

    function LeaguesCtrl($state,eliteApi) {
        var vm = this;
        var leagues = eliteApi.getLeagues();
        // var leaguesData = eliteApi.getLeagueData();
        // console.log(leagues,leaguesData);
        vm.leagues = leagues;
        vm.selectedLeague = function(leagueId)
        {
            //Todo :select correct leagues
            $state.go('app.teams');

        };
    };
})();