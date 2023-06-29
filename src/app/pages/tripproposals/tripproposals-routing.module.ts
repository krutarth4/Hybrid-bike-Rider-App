import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripproposalsPage } from './tripproposals.page';

const routes: Routes = [
  {
    path: '',
    component: TripproposalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripproposalsPageRoutingModule {}
