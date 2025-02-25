import { Component, Input } from '@angular/core';
import { IPessoas } from 'src/app/interfaces/pessoas';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input() pessoa: IPessoas | null = null;

    @Input()
    nameButton: any = {};

    @Input()
    nameTitle: any = {};

    @Input()
    nameInput: any = {};

    @Input()
    cep: any = {};

    @Input()
    aderess: any = {};

    @Input()
    city: any = {};

    @Input()
    uf: any = {};
}
