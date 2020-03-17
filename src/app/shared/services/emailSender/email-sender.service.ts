import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';


const KEY = environment.config.SENDGRID_KEY;
const URL = environment.config.SENGRID_URL;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': KEY
  })
};


@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {


  readonly ROOT_URL = URL;

  constructor(private Http: HttpClient) {}


  sendMessage(body: any) {

    return this.Http.post(this.ROOT_URL, body, httpOptions);
  }
}
