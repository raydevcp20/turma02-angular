import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCEP'
})
export class FormatCEPPipe implements PipeTransform {

  transform(value: any, caracterDeSeparacao: "-" | "."): string {
    if(value && value.length === 8) {
      console.log(value.slice(0, 5))
      return value.slice(0, 5) + caracterDeSeparacao + value.slice(5, 8);
    }else{
      return "";
    }
  }

}
