import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripproposalsPageRoutingModule } from './tripproposals-routing.module';

import { TripproposalsPage } from './tripproposals.page';
import "leaflet.awesome-markers/dist/leaflet.awesome-markers";
import { SharedModuleModule } from 'src/app/modules/sharedModule/shared-module/shared-module.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripproposalsPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [TripproposalsPage]
})
export class TripproposalsPageModule {}
