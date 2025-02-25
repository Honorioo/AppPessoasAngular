import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent {

  @Input()
  pessoas:any = []

  @Input()
  id: any = {};

  @Input()
  name: any = {};

  @Input()
  coluna1: any = {};

  @Input()
  coluna2: any = {};
}
