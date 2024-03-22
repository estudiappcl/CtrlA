import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-historial-equipo-inventario',
  templateUrl: './modal-historial-equipo-inventario.component.html',
  styleUrl: './modal-historial-equipo-inventario.component.css'
})
export class ModalHistorialEquipoInventarioComponent {
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit();
  }
}
