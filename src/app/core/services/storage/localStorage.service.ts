import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class LocalStorageService  {

    constructor(
      @Inject(LOCAL_STORAGE) private storage: StorageService
      ) { }

    setDataToLocalStorage(key:string, value: any) {
      let storageData:string[] = this.storage.get(key) || [];
      if(storageData.some(item => item === value))
      {return}
      storageData.push(value);
      this.storage.set(key, storageData);
    }

    getLocalStorageData(STORAGE_KEY: any):String[] {
      return this.storage.get(STORAGE_KEY);
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
