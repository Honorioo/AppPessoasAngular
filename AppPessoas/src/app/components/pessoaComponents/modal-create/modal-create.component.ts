import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent implements OnInit  {

  constructor(private appService: PessoaService, private router: Router) { }

  pessoa: IPessoasCompleta = {
    id: null,
    nome: '',
    endereco: '',
    cidade: '',
    uf: '',
    cep: ''
  };

  ngOnInit(): void {

  }

  createPessoas(): void {
    this.appService.create(this.pessoa).subscribe({
      next: () => {
        console.log('Pessoa criada com sucesso', this.pessoa);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao criar pessoa:', err);
      }
    });
  }
}
