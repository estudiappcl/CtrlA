import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-individual',
  templateUrl: './ingreso-individual.component.html',
  styleUrl: './ingreso-individual.component.css'
})
export class IngresoIndividualComponent {
  breadcrumbs = [

    { text: 'Home', link: '/home' },
    { text: 'Ingreso individual', link: '/ingreso-individual' }
  
  ];

  mostrarModalResumenIngresoIndividual: boolean = false;
  
  //consulta masiva
  abrirModalResumenIngresoIndividual(): void {
    this.mostrarModalResumenIngresoIndividual = true;
  }

  cerrarModalResumenIngresoIndividual(): void {
    this.mostrarModalResumenIngresoIndividual = false;
  }
}
