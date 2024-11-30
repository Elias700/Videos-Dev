
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-xumznb75xdz3aw6t.us.auth0.com',
      clientId: '9v6NHnSKkjRvH54TXUdQORTQmtddTXmE',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    })
  ]
};
