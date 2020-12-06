import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ProductsUrl } from '../../productsUrl';


const KEY = environment.config.SENDGRID_KEY;
const URL = environment.config.SENGRID_URL;

const BASE_URL = environment.config.databaseURL;
const API_PRODUCTS = `${BASE_URL}`+ ProductsUrl.emailUrl +".json";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: KEY
  })
};


@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {


  readonly ROOT_URL = URL;

  constructor(private Http: HttpClient) {}


  sendMessage(contentBody: any, name: string) {

    const body = {
      personalizations: [{
        to: [{
          email: 'napuwunapuwu@gmail.com',
          name: 'John Doe'
        }],
        subject: `Замовлення `
      }],
      content: [{
        type: 'text/html',
        value: contentBody
      }
    ],
      from: {
        email: 'napuwunapuwu@gmail.com',
        name: 'TEST Smith'}
      };

    return this.Http.post(this.ROOT_URL, body, httpOptions);
  }
}
