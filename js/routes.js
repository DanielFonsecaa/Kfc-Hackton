export default {
    home: {
        path: '/',
        controller: 'homeController'
    },
    currentPath: {
        path: '',
        controller: ''
    },
    bet: {
        path: '/bets',
        controller: 'betsController'
    },
    history: {
        path: '/history',
        controller: 'historyController'
    },
      singleBet:{
        path: `/b/\[0-9]+`,
        controller: 'singleBetController'
      } 

    };
