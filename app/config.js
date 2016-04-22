app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary',customPrimary);
  $mdThemingProvider.theme('default').primaryPalette('customPrimary');
});

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
