import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-consulta-masiva',
  templateUrl: './modal-consulta-masiva.component.html',
  styleUrls: ['./modal-consulta-masiva.component.css']
})
export class ModalConsultaMasivaComponent {

  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
