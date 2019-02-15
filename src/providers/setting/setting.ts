import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
/*
  Generated class for the SettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingProvider {
  private theme: BehaviorSubject<String>;
  constructor(public http: HttpClient, private storage: Storage) {
    this.theme = new BehaviorSubject('');
    this.storage.get('activeTheme').then((val) => {
      this.setActiveTheme(val);
    },err => {
      this.setActiveTheme('');
    });
  }
  setActiveTheme(val) { 
    this.storage.set('activeTheme',val)
    this.theme.next(val);
}

getActiveTheme() {
    return this.theme.asObservable();
}

}
