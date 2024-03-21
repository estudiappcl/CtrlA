import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-duplicado',
  templateUrl: './modal-duplicado.component.html',
  styleUrl: './modal-duplicado.component.css'
})
export class ModalDuplicadoComponent {
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit(); // Emite el evento para ser escuchado por el componente padre
  }
}
