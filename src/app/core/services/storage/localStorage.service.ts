import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';


@Injectable()
export class LocalStorageService  {
     constructor(
       @Inject(LOCAL_STORAGE) private storage: StorageService
       ) { }

     setDataToLocalStorage(key:string, value: any) {
      let storageData:string[] = this.storage.get(key) || [];

      if(storageData.some(item => item === value)){return}

      this.storage.set(key, [...storageData, value]);
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
