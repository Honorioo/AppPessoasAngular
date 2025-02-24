import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent {

  itens = [
    { nome: 'João Silva', tipoContato: 'Telefone', contato: '13996093979'},
  ];

  @Input()
  id: any = {};

  @Input()
  name: any = {};

  @Input()
  coluna1: any = {};

  @Input()
  coluna2: any = {};
}
