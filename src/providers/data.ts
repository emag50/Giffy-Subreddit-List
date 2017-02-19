import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getData(): Promise<any> {
    return this.storage.get('settings');
  }

  save(data): void {
    let newData = JSON.stringify(data);
    this.storage.set('settings', newData);
  }

}