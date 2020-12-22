import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndianewssinglePage } from './indianewssingle.page';

const routes: Routes = [
  {
    path: '',
    component: IndianewssinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndianewssinglePageRoutingModule {}
