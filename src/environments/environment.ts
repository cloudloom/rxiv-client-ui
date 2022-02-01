// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api-staging-rxiv.jackfruitree.io',
  cognitoUrl: 'https://rxiv-staging.auth.ap-southeast-1.amazoncognito.com',
  cognitoRedirectUri: 'http://localhost:4200/auth/',
  clientId: '5sqqicavtk2eue09c16ocefu90',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
