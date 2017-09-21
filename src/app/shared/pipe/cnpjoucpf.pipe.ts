import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpjoucpf'
})
export class CnpjoucpfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length == 11)
      return this.transformarEmCPF(value);
    else if(value.length == 14)
      return this.transformarEmCNPJ(value);
    else
      return "-";
  }

  private transformarEmCPF(value: any) : string {
    return value.substr(0, 3) + '.' + value.substr(3, 3) + '.' + value.substr(6, 3) + '-' + value.substr(9);
  }

  private transformarEmCNPJ(value: any) : string {
    return value.substr(0, 2) + '.' + value.substr(2, 3) + '.' + value.substr(5, 3) + '/' + value.substr(8,4) + '-' + value.substr(12);
  }
}
