import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SettingProvider } from '../../providers/setting/setting';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LanguageSwitcherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-language-switcher',
  templateUrl: 'language-switcher.html',
})

export class LanguageSwitcherPage {
  languages: any = [];
  languageSelected: any = '';
  selectedTheme: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public translate: TranslateService,private settings: SettingProvider, public storage: Storage) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.storage.get('activeLang').then((val) => {
      this.setLanguage(val)
    },err => {
      this.translate.setDefaultLang('en');
    });
    // translate.setDefaultLang('en');
    this.languages.push(
      {name: "English", code: "en"},
      {name: "Spanish", code: "es"},
      {name: "Arabic", code: "ar"}
    );
    console.log(this.languages);
    
    this.setLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguageSwitcherPage');
  }
  setLanguage(lnCode: any = 'en'){
    this.storage.set('activeLang',lnCode)
    let defaultLanguage = this.translate.getDefaultLang();
    if(lnCode){
      this.translate.setDefaultLang(this.languageSelected);
      this.translate.use(lnCode);
    }else{
      lnCode = defaultLanguage;
      this.translate.use(defaultLanguage);
    }
  }
  changeTheme(selectedTheme:any=''){
    this.settings.setActiveTheme(selectedTheme);
  }

}
