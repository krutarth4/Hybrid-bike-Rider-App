import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distancePipe'
})
export class DistancePipePipe implements PipeTransform {

  transform(value: any): any {
    let a;
    if (value < 1000 && value>=0) {
       a= value + ' m'
    } else if (value < 0) {
      a = 0 +' m'
      
    } else if (value > 1000) {
      let b = value /1000
      let c = parseFloat(b.toFixed(1));
      a= c+" km"
    }
    return a;
  }

}
