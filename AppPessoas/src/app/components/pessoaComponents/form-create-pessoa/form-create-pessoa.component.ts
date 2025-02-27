import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-form-create-pessoa',
  templateUrl: './form-create-pessoa.component.html',
  styleUrls: ['./form-create-pessoa.component.scss']
})
export class FormCreatePessoaComponent implements OnInit  {

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
