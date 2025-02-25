import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IPessoas } from 'src/app/interfaces/pessoas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() pessoas: IPessoas[] = [];
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
