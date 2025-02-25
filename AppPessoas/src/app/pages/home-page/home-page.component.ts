import { AppServiceService } from 'src/app/service/app-service.service';
import { IPessoas } from './../../interfaces/pessoas';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  pessoas: IPessoas[] = [];

  constructor(private appServiceService: AppServiceService) {}

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
