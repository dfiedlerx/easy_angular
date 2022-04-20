import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'firstCharUppercase',
})
export class FirstCharUppercasePipe implements PipeTransform {
  transform(str: string | undefined): string | undefined {
    return str !== undefined ? str[0].toUpperCase() + str.slice(1) : undefined
  }
}
