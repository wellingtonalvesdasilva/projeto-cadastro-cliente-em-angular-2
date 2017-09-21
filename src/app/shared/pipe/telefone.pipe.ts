import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length == 10)
      return this.transformarEmTelefoneOuCelularDe8Digitos(value);
    else if(value.length == 11)
      return this.transformarEmCelularCom9Digitos(value);
    else
      return "-";
  }

  private transformarEmTelefoneOuCelularDe8Digitos(value: any) : string {
    return '(' + value.substr(0, 2) + ') ' + value.substr(2, 4) + '-' + value.substr(6, 4);
  }

  private transformarEmCelularCom9Digitos(value: any) : string {
    return '(' + value.substr(0, 2) + ') ' + value.substr(2, 5) + '-' + value.substr(7, 4);
  }
}
