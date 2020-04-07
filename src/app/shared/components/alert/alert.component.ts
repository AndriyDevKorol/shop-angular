import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {

  alertMsg: string;
  alertError = true;
  alertInfo = false;
  currentClasses = {};

  constructor() { }

  ngOnInit() {
    this.setClasses();
    this.alertMsg = 'Some error!';
  }

setClasses() {
  this.currentClasses = {
    'alert-danger': this.alertError,
    'alert-info': this.alertInfo

  };
}

}
