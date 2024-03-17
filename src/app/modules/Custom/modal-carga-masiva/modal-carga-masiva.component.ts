import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-carga-masiva',
  templateUrl: './modal-carga-masiva.component.html',
  styleUrl: './modal-carga-masiva.component.css'
})
export class ModalCargaMasivaComponent {
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit();
  }
}
