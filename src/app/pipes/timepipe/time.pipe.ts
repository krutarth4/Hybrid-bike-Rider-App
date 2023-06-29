import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(seconds: any): any {

    let result
    if (seconds < 60 && seconds >= 0) {
      result = seconds + " s"
      
    } else if (seconds < 0) {
      result = 0 + " s"
      
    } else if (seconds >= 60) {

    let minutes: number = Math.floor(seconds / 60);
      let secs: number = seconds % 60;
      result = minutes + ":"+ secs +" min" 
      
    }

    return result;

  }

}
