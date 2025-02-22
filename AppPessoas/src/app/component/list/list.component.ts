import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  itens = [
    { nome: 'João Silva', endereco: 'Rua A, 123', email: 'joaomail.com' },
    { nome: 'Maria Santos', endereco: 'Rua B, 456', email: 'mariasmail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
    { nome: 'Pedro Oliveira', endereco: 'Rua C, 789', email: 'pedromail.com' },
  ];


}
