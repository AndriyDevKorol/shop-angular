import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import { HttpStatus } from '../models/http-status';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      headers: request.headers.append('Content-type', 'json')
    })

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === HttpStatus.UNATGHORIZED) {
          console.log('UnserAuthorized');
        }
        return throwError(err);
      })
    );
  }
}
