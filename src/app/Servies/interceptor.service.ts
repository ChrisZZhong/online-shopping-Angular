import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
// Must implement the HttpInterceptor Interface!
export class InterceptorService implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        // 'Access-Control-Allow-Origin': '*',
      }
    });

    return next.handle(req);
  }
}
