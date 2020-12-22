import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndianewsPage } from './indianews.page';

const routes: Routes = [
  {
    path: '',
    component: IndianewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndianewsPageRoutingModule {}
