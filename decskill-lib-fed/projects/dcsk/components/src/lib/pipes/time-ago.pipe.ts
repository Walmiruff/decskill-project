import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Pipe({
  name: 'timeAgo',
  pure: false, // Define o pipe como impuro para que seja atualizado em tempo real
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private timer!: Subscription;

  transform(value: Date | undefined): string {
    if (value !== undefined) {
      if (!(value instanceof Date)) {
        return ''; // Valor não é uma data válida, retorne uma string vazia ou outra mensagem de erro
      }
  
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - value.getTime()) / 1000);
  
      if (diffInSeconds < 60) {
        return `${diffInSeconds} s`;
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} min`;
      } else {
        return value.toLocaleString();
      }
    } else {
        return '';
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      this.timer.unsubscribe();
    }
  }
}
