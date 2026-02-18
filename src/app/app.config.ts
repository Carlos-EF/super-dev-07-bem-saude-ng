import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import {provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAuth0({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        audience: environment.auth0.audience,
        redirectUri: environment.auth0.redirectUri,
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}/*`,
            tokenOptions: {
              authorizationParams: {
                audience: environment.auth0.audience
              }
            }
          }
        ]
      }
    }),
    providePrimeNG({
      overlayAppendTo: "body",
      theme: {
          preset: Aura,
      }
  }),
  MessageService,
  ConfirmationService,
  ]
};
