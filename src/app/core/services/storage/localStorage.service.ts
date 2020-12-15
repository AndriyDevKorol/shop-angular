import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable()
export class LocalStorageService  {
  // private dataStorage = new BehaviorSubject<string[]>([]);
  // dataStorageEvent = this.dataStorage.asObservable();


    constructor(
      @Inject(LOCAL_STORAGE) private storage: StorageService
      ) { }

    setDataToLocalStorage(key:string, value: any) {
    let storageData:string[] = this.storage.get(key) || [];

    if(storageData.some(item => item === value)){return}

    storageData.push(value);
    this.storage.set(key, storageData);
    // console.log('service', this.dataStorage);
    // this.dataStorage.next(storageData);
    }

    getLocalStorageData(STORAGE_KEY: any):String[] {
    return this.storage.get(STORAGE_KEY);
    }

    updateStore(data){
      console.log('dd', data);
      // this.dataStorage.next(data);
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
