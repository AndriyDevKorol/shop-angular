import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private selectedCategory = new BehaviorSubject<string>("");
  currentCategory = this.selectedCategory.asObservable();

  constructor() { }

  changeCategory(category: string){
    this.selectedCategory.next(category);
  }

}
