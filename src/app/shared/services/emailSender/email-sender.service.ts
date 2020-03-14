import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'bearer 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'
  })
};


@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {


  readonly ROOT_URL = 'https://api.sendgrid.com/v3/mail/send'

  constructor(private Http: HttpClient) {}


  sendMessage(body: any) {
    console.log('active send service');
    return this.Http.post(this.ROOT_URL, body, httpOptions);
  }

}
