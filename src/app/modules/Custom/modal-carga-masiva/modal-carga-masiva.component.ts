import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-carga-masiva',
  templateUrl: './modal-carga-masiva.component.html',
  styleUrl: './modal-carga-masiva.component.css'
})
export class ModalCargaMasivaComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Output() abrirModalDuplicados = new EventEmitter<void>(); 
  fileLoaded: boolean = false;
  fileLoading: boolean = false;
  showUploadButton: boolean = false;
  
  onFileSelected(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      // Simular carga de archivo
      console.log('Archivo seleccionado:', file.name);
      this.simulateFileLoad();
    }
  }

  simulateFileLoad(): void {
    this.fileLoading = true; // Comenzamos la simulación de carga
    setTimeout(() => {
      this.fileLoading = false; // Terminamos la simulación de carga
      this.fileLoaded = true;
      this.showUploadButton = true;
    }, 2000); // Simula un tiempo de carga de 2 segundos
  }

  onUpload(): void {
    // Aquí puedes redirigir a otra vista o realizar otra acción
    console.log('Archivo listo para la siguiente acción');
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }
  
  abrirDuplicados(): void {
    this.cerrarModal(); // Cerrar este modal primero
    this.abrirModalDuplicados.emit(); // Luego emitir evento para abrir modal de duplicados
  }
}
