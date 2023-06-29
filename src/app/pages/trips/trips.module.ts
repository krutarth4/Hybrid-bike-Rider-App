import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TripsPageRoutingModule } from "./trips-routing.module";

import { TripsPage } from "./trips.page";
import { NgxGaugeModule } from "ngx-gauge";
import { SharedModuleModule } from "src/app/modules/sharedModule/shared-module/shared-module.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsPageRoutingModule,
    NgxGaugeModule,
    SharedModuleModule
  ],
  declarations: [TripsPage],
})
export class TripsPageModule {}
