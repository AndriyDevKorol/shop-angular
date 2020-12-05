import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';


@Injectable()
export class LocalStorageService  {
     anotherTodolist = [];

     constructor(
       @Inject(LOCAL_STORAGE) private storage: StorageService
       ) { }

    //  storeOnLocalStorage(taskTitle: string): void {

    //       // get array of tasks from local storage
    //       const currentTodoList = this.storage.get(STORAGE_KEY) || [];
    //       // push new task to array
    //       currentTodoList.push({
    //           title: taskTitle,
    //           isChecked: false
    //       });
    //       // insert updated array to local storage
    //       this.storage.set(STORAGE_KEY, currentTodoList);
    //       console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    //  }

     setDataToLocalStorage(key:string, value: any) {
       this.storage.set(key, value);
     }

     getLocalStorageData(STORAGE_KEY: any)  {
      return this.storage.get(STORAGE_KEY);
     }

     removeLocalStoargeData() {

     }
}
