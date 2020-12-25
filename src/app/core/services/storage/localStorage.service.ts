import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StorageCartModel } from 'src/app/models/storage.model';


@Injectable()
export class LocalStorageService  {

    constructor(
      @Inject(LOCAL_STORAGE) private storage: StorageService
      ) { }

    setDataToLocalStorage(storageKey:string, value: any) {
      let storageData:any[] = JSON.parse(localStorage.getItem(localStorage.getItem(storageKey))) || [];
      // let storageItem:StorageCartModel;
      if(storageData.some(item => item === value))
      {return}
      let storageItem:StorageCartModel = {$key: value, count: 1};
      // storageItem.$key = value;
      // storageItem.count = 1;
      storageData.push(storageItem);
      this.storage.set(storageKey, JSON.stringify(storageData));
    }

    getLocalStorageData(STORAGE_KEY: any):any[] {
      return JSON.parse(localStorage.getItem(localStorage.getItem(STORAGE_KEY)));
    }

    removeLocalStoargeData(key: string) {
      let items = this.storage
      .get('cart')
      .filter(el => el !== key);
      return this.setDataToLocalStorage('cart', items);
    }

    clearLocalStoargeData() {
      this.storage.clear();
    }
}
