import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  breadcrumbs = [

    { text: 'Home', link: '/home' },
   
  
  ];


  mostrarModalConsultaMasiva: boolean = false;
  mostrarModalGestionUsuario: boolean = false;
  mostrarModalCargaMasiva: boolean = false;
  mostrarModalDuplicados: boolean = false;

  abrirModalDuplicados(): void {
    this.mostrarModalDuplicados = true;
  }

  cerrarModalDuplicados(): void {
    this.mostrarModalDuplicados = false;
  }
  //consulta masiva
  abrirModalConsultaMasiva(): void {
    this.mostrarModalConsultaMasiva = true;
  }

  cerrarModalConsultaMasiva(): void {
    this.mostrarModalConsultaMasiva = false;
  }
//gestion usuario

  abrirModalGestionUsuario(): void {
    this.mostrarModalGestionUsuario = true;
  }

  cerrarModalGestionUsuario(): void {
    this.mostrarModalGestionUsuario = false;
  }

  //carga masiva
  abrirModalCargaMasiva(): void {
    this.mostrarModalCargaMasiva = true;
  }

  cerrarModalCargaMasiva(): void {
    this.mostrarModalCargaMasiva = false;
  }
}