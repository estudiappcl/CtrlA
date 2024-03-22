import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-historial-equipo-dcp',
  templateUrl: './modal-historial-equipo-dcp.component.html',
  styleUrl: './modal-historial-equipo-dcp.component.css'
})
export class ModalHistorialEquipoDcpComponent {
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit();
  }
}
