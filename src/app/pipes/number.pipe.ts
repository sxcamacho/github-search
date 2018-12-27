import { Pipe, PipeTransform } from '@angular/core'
import * as numeral from 'numeral'

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  transform(value: number): string {
    return numeral(value).format()
  }
}
