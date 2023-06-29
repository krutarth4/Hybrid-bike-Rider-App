import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistancePipePipe } from 'src/app/pipes/distancePipe/distance-pipe.pipe';
import { TimePipe } from 'src/app/pipes/timepipe/time.pipe';



@NgModule({
  declarations: [DistancePipePipe,TimePipe],
  imports: [
    CommonModule
  ],
  exports:[DistancePipePipe, TimePipe]
})
export class SharedModuleModule { }
