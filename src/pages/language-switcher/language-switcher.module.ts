import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguageSwitcherPage } from './language-switcher';

@NgModule({
  declarations: [
    LanguageSwitcherPage,
  ],
  imports: [
    IonicPageModule.forChild(LanguageSwitcherPage),
  ],
})
export class LanguageSwitcherPageModule {}
