import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { API_KEY } from '../../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  API_URL = 'https://www.googleapis.com/youtube/v3';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const keyRequest = request.clone({
      url: `${this.API_URL}${request.url}`,
      setParams: {
        key: API_KEY,
      },
    });
    return next.handle(keyRequest);
  }
}
