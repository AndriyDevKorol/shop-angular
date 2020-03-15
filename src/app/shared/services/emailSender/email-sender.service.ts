import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Subject } from 'rxjs';

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

    var subject = new Subject<number>()
    const req = new HttpRequest('POST', this.ROOT_URL, body, {
        reportProgress: true,
    });
    console.log('active send service', req);
    // return this.Http.post(this.ROOT_URL, body, httpOptions);
    return this.Http.request(req);
  }

}
