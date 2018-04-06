import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HairDetailPage } from './hair-detail';

@NgModule({
  declarations: [
    HairDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HairDetailPage),
  ],
})
export class HairDetailPageModule {}
