import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'form-update-pessoa',
  templateUrl: './form-update-pessoa.component.html',
  styleUrls: ['./form-update-pessoa.component.scss']
})
export class FormUpdatePessoaComponent implements OnInit {
  pessoa: IPessoasCompleta = {
    id: null,
    nome: '',
    endereco: '',
    cep: '',
    cidade: '',
    uf: ''
  };

  constructor(
    private appService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id && !isNaN(Number(id))) {
        this.pessoa.id = Number(id);

        // Busca os dados da pessoa
        this.appService.getPessoaById(this.pessoa.id).subscribe({
          next: (pessoa) => {
            this.pessoa = pessoa;
          },
          error: (err) => {
            console.error('Erro ao buscar pessoa:', err);
          }
        });
      }
    });
  }

  updatePessoas(): void {
    if (!this.pessoa.nome || !this.pessoa.endereco || !this.pessoa.cidade || !this.pessoa.uf || !this.pessoa.cep) {
      alert('Todos os campos devem ser preenchidos.');
      return;
    }

    if (this.pessoa.id !== null) {
      this.appService.updatePessoa(this.pessoa).subscribe({
        next: () => {
          console.log('Pessoa atualizada com sucesso', this.pessoa);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao atualizar pessoa:', err);
        }
      });
    } else {
      console.warn('ID da pessoa não definido.');
    }
  }
}
