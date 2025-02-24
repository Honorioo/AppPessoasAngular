import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  itens = [
    { nome: 'João Silva', endereco: 'Rua A, 123'},
  ];

  /* Lista Dinamica */

  @Input()
  id: any = {};

  @Input()
  name: any = {};

  @Input()
  coluna1: any = {};

  @Input()
  coluna2: any = {};
}
