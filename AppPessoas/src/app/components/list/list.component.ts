import { Component, Input } from '@angular/core';
import { IPessoasCompleta } from 'src/app/interfaces/pessoaCompleta';
import { IPessoas } from 'src/app/interfaces/pessoas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {


  @Input() pessoas: IPessoas[] = [];

  @Input() pessoa: IPessoasCompleta = {} as IPessoasCompleta

}
