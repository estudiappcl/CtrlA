import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.css'
})
export class ModalEditarComponent {
  @Input() mensajeModalEditar: string = '';
  @Output() cerrar = new EventEmitter<void>();
  cerrarModal(): void {
    this.cerrar.emit(); // Emite el evento para ser escuchado por el componente padre
  }
}
