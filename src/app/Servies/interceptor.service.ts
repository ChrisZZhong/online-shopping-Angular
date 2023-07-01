import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
// Must implement the HttpInterceptor Interface!
export class InterceptorService implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) :
    Observable<HttpEvent<any>> {
    if (req.method != 'OPTIONS') {
      const token = 'Bearer ' + localStorage.getItem('token');
      req = req.clone({
        setHeaders: {
          Authorization: token,
        }
      });
    }
    console.log(req);
    return next.handle(req);

  }

}
