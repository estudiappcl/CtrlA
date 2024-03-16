import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-consulta-individual',
  templateUrl: './modal-consulta-individual.component.html',
  styleUrls: ['./modal-consulta-individual.component.css']
})
export class ModalConsultaIndividualComponent {
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
