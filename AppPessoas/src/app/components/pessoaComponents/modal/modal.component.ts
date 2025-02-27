import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { PessoaService } from 'src/app/service/pessoa/pessoa.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
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
