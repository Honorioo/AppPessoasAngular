import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
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
