import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftcardsPage } from './giftcards';

@NgModule({
  declarations: [
    GiftcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(GiftcardsPage),
  ],
})
export class GiftcardsPageModule {}
