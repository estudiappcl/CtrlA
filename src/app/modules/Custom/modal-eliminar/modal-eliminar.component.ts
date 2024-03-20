import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrl: './modal-eliminar.component.css'
})
export class ModalEliminarComponent {
  tituloModal: string = '';
  mensajeModal: string = '';
  mostrarModal: boolean = false;
  @Output() cerrar = new EventEmitter<void>();
  @Output() exito = new EventEmitter<void>(); 
  abrirModalExitoso(): void {
    this.tituloModal = 'Eliminar usuario';
    this.mensajeModal = 'Usuario JPerez ha sido eliminado con éxito.';
    this.mostrarModal = true;
    this.cerrarModal();
    
  }
  cerrarModal(): void {
    this.cerrar.emit(); // Emite el evento para ser escuchado por el componente padre
  }
  
}
