import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndianewssinglePageRoutingModule } from './indianewssingle-routing.module';

import { IndianewssinglePage } from './indianewssingle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndianewssinglePageRoutingModule
  ],
  declarations: [IndianewssinglePage]
})
export class IndianewssinglePageModule {}
