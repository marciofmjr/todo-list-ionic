import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(stringDate: string): string {
    const date = new Date(stringDate);
    return date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  }

}
