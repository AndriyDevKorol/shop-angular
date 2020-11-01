import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getProductOfCategory(){
   return console.log("get products of the category")
  }

}
