import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpMethod = HttpMethod;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get<T>(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<T> {
    return this.httpClient.request<T>(HttpMethod.GET, url, {headers, params});
  }

  post<T>(url: string, body: any, headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    return this.httpClient.request(HttpMethod.POST, url, {body, headers, params});
  }
}
