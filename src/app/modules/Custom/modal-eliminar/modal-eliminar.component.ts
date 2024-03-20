import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrl: './modal-eliminar.component.css'
})
export class ModalEliminarComponent {
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit(); // Emite el evento para ser escuchado por el componente padre
  }
}
