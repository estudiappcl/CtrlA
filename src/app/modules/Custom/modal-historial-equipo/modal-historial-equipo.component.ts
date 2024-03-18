import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-historial-equipo',
  templateUrl: './modal-historial-equipo.component.html',
  styleUrl: './modal-historial-equipo.component.css'
})
export class ModalHistorialEquipoComponent {
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
