import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndianewsPageRoutingModule } from './indianews-routing.module';

import { IndianewsPage } from './indianews.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndianewsPageRoutingModule
  ],
  declarations: [IndianewsPage]
})
export class IndianewsPageModule {}
