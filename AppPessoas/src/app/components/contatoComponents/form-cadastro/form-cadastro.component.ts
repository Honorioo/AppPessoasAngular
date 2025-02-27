import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IContatos } from 'src/app/interfaces/contatos';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { IPessoas } from 'src/app/interfaces/pessoas';
import { TipoContato } from 'src/app/interfaces/tipoContato';
import { ContatoService } from 'src/app/service/contato/contato.service';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  constructor(private appService: ContatoService, private router: Router, private pessoaService: PessoaService) { }

  tiposContato = Object.values(TipoContato);

  contatos: IContatos = {
    id: null,
    nome: '',
    tipoContato: TipoContato.CELULAR,
    contato: '',
    pessoas: []
  };

  pessoas: IPessoas[] = [];

  ngOnInit(): void {
    this.listarPessoa()
  }

  listarPessoa() {
    this.pessoaService.searchPessoas().subscribe({
      next: (pessoas: IPessoas[]) => {
        this.pessoas = pessoas;
        console.log('Retorno pessoas:', this.pessoas);
      },
      error: (error) => {
        console.error('Erro ao carregar pessoas:', error.message);
      }
    });
  }



  createContatos(): void {
    this.appService.createContato(this.contatos).subscribe({

      next: () => {
        console.log('Pessoa criada com sucesso', this.contatos);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao criar pessoa:', err);
      }
    });
  }
}
