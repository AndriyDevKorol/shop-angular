import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable()
export class LocalStorageService  {
     anotherTodolist = [];

     constructor(
       @Inject(LOCAL_STORAGE) private storage: StorageService
       ) { }

     setDataToLocalStorage(key:string, value: any) {
       this.storage.set(key, value);
     }

     getLocalStorageData(STORAGE_KEY: any)  {
      return this.storage.get(STORAGE_KEY);
     }

     removeLocalStoargeData() {

     }
}
