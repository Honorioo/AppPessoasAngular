import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { IPessoas } from 'src/app/interfaces/pessoas';
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() pessoa: IPessoas = {} as IPessoas;
  @Input() nameButton = '';
  @Input() nameTitle = '';
  @Input() nameInput = '';
  @Input() cep = '';
  @Input() address = '';
  @Input() city = '';
  @Input() uf = '';

  pessoas: IPessoas[] = [];
  pessoaForm!: FormGroup;

  constructor(private appService: AppServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.carregarPessoas();
  }

  selecionarPessoa(pessoa: IPessoas) {
    if (!pessoa?.id) {
      console.error("Erro: Pessoa inválida selecionada!", pessoa);
      this.initializeForm();
      return;
    }

    this.pessoaForm.patchValue({
      id: pessoa.id,
      nome: pessoa.name,
      endereco: pessoa.enderecoCompleto
    });

    console.log("Pessoa selecionada para edição:", pessoa);
  }

  onSubmit() {
    if (this.pessoaForm.invalid) {
      console.error("Erro: Formulário inválido", this.pessoaForm.value);
      Object.keys(this.pessoaForm.controls).forEach(key => {
        const controlErrors = this.pessoaForm.get(key)?.errors;
        if (controlErrors) {
          console.log('Erro no campo ' + key + ': ', controlErrors);
          console.log("Valor do campo id:", this.pessoaForm.get('id')?.value);
        }
      });
      return;
    }

    const pessoaEditada: IPessoas = {
      ...this.pessoaForm.value,
      id: this.pessoaForm.get('id')?.value?.trim() || this.pessoa.id || '',
    };

    if (!pessoaEditada.id) {
      console.error("Erro: ID inválido ao tentar atualizar", pessoaEditada);
      return;
    }

    console.log("Enviando para atualização:", pessoaEditada);
    this.update(pessoaEditada);
  }

  carregarPessoas() {
    this.appService.searchPessoas().subscribe({
      next: (dados) => {
        this.pessoas = dados || [];
        this.pessoaForm.get('id')?.setValue(this.pessoas.map(p => p.id)); // Preenche com todos os IDs
      },
      error: (erro) => console.error("Erro ao carregar pessoas:", erro)
    });
  }

  preencherIds() {
    const ids = this.pessoas.map(pessoa => pessoa.id); // Extrai todos os IDs
    this.pessoaForm.get('id')?.setValue(ids); // Define os IDs no campo
  }

  initializeForm(pessoa?: IPessoasCompleta) {
    this.pessoaForm = this.fb.group({
      id: [pessoa?.id || []], // Campo para selecionar um ID
      nome: [pessoa?.nome || '', Validators.required],
      endereco: [pessoa?.endereco || '', Validators.required],
      cidade: [pessoa?.cidade || '', Validators.required],
      uf: [pessoa?.uf || '', [Validators.required, Validators.maxLength(2)]],
      cep: [pessoa?.cep || '', [Validators.required, Validators.pattern('^[0-9]{5}-[0-9]{3}$')]]
    });
  }

  update(pessoa: IPessoas) {
    this.appService.update(pessoa).subscribe({
      next: () => {
        console.log("Atualização bem-sucedida!");
        this.carregarPessoas();
      },
      error: (error) => console.error("Erro ao atualizar:", error)
    });
  }
}
