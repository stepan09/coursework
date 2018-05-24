import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'searchForThings'
})

export class SearchPipeForThings implements PipeTransform{
  transform(values, value) {
    return values.filter(val => {
      return val.name.includes(value);
    });
  }

}
