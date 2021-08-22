import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

import { ApiKeyInterceptor } from './api-key.interceptor';

export const INTERCEPTOR_PROVIDERS:Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true,
  },
];
