app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary',customPrimary);
  $mdThemingProvider.theme('default').primaryPalette('customPrimary');
});