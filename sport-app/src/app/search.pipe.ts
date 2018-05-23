import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(values, value) {
    return values.filter(val => {
      return val.lastName.includes(value)
    })
  }
}
