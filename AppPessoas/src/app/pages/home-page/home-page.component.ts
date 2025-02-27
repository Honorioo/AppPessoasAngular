import { IPessoas } from './../../interfaces/pessoas';
import { Component } from '@angular/core';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  pessoas: IPessoas[] = [];

  constructor(private appServiceService: PessoaService) {}

  ngOnInit() {
    this.appServiceService.searchPessoas().subscribe({
      next: (pessoas: IPessoas[]) => {
        this.pessoas = pessoas;
        console.log('Retorno pessoas:', this.pessoas);
      },
      error: (error) => {
        console.error('Erro ao carregar pessoas:', error.message);
      }
    });
  }

}
