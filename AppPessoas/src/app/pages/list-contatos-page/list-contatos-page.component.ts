import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-contatos-page',
  templateUrl: './list-contatos-page.component.html',
  styleUrls: ['./list-contatos-page.component.scss']
})
export class ListContatosPageComponent {

  @Input()
  id: string = 'ID';

  @Input()
  name: string = 'Nome';

  @Input()
  coluna1: string = 'Tipo Contato';

  @Input()
  coluna2: string = 'Contato';


}
