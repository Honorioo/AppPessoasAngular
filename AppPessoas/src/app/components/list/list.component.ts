import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPessoas } from 'src/app/interfaces/pessoas';
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() pessoas: IPessoas[] = [];

  constructor(private appService: AppServiceService, private router: Router) {}

  delete(id: number): void {
    if (id) {
      this.appService.deletePessoas(id).subscribe({
        next: () => {
          console.log(`Pessoa com ID ${id} excluída com sucesso`);
          // Atualiza a lista de pessoas localmente
          this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id);
        },
        error: (err) => {
          console.error('Erro ao excluir pessoa:', err);
        }
      });
    } else {
      console.warn('ID da pessoa não definido. Não é possível excluir.');
    }
  }
}
