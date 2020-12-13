import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';


@Injectable()
export class LocalStorageService  {
     anotherTodolist = [];

     constructor(
       @Inject(LOCAL_STORAGE) private storage: StorageService
       ) { }

     setDataToLocalStorage(key:string, value: any) {
      this.storage.set(key, value);
     }

     getLocalStorageData(STORAGE_KEY: any): Observable<[]>  {
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
