import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  languages: any = [];
  languageSelected: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
