import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-exitoso',
  templateUrl: './modal-exitoso.component.html',
  styleUrls: ['./modal-exitoso.component.css']
})
export class ModalExitosoComponent {
  @Input() titulo: string = '';
  @Input() mensaje: string = '';
  @Input() mensajeModal: string = '';
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit(); // Emite el evento para ser escuchado por el componente padre
  }
}