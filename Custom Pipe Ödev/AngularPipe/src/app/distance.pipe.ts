import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: any, type: string): unknown {

    if(type == "mm") {
      return value*1000 + " mm"
    }
    else if(type == "cm") {
      return value*100 + " cm"
    }
    else if(type == "km") {
      return value/1000 + " km"
    }
    else {
      throw new Error('Yanlış argüman')
    }
  }

}
