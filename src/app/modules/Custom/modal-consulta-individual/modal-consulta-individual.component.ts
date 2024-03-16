import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-consulta-individual',
  templateUrl: './modal-consulta-individual.component.html',
  styleUrls: ['./modal-consulta-individual.component.css']
})
export class ModalConsultaIndividualComponent {
  @Input() tipoConsulta: 'usuario' | 'agencia' | 'inventario' | null = null;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
