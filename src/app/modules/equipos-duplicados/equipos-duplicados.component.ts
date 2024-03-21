import { Component } from '@angular/core';
import { Consulta } from '../tabla-equipos-duplicados/tabla-equipos-duplicados.component'; // Asegúrate de importar el tipo de datos Consulta

@Component({
  selector: 'app-equipos-duplicados',
  templateUrl: './equipos-duplicados.component.html',
  styleUrls: ['./equipos-duplicados.component.css']
})
export class EquiposDuplicadosComponent {
  breadcrumbs = [
    { text: 'Home', link: '/home' },
  ];
  displayedColumns: string[] = ['nombreEquipo', 'codigoInventario', 'datosModificados'];

  // Define tus datos de consulta aquí
  datos: Consulta[] = [
    { 
      nombreEquipo: 'Laptop Pro', 
      codigoInventario: 'DCP001', 
      datosModificados: ['Agencia A', 'Fecha de modificación: 2023-01-15', 'Usuario responsable: Juan'] 
    },
    { 
      nombreEquipo: 'Desktop Power', 
      codigoInventario: 'DCP002', 
      datosModificados: ['Agencia B', 'Fecha de modificación: 2023-02-20', 'Usuario responsable: Maria'] 
    },
    { 
      nombreEquipo: 'Monitor Ultra', 
      codigoInventario: 'DCP003', 
      datosModificados: ['Agencia C', 'Fecha de modificación: 2023-03-25', 'Usuario responsable: Carlos'] 
    },
    { 
      nombreEquipo: 'Server Max', 
      codigoInventario: 'DCP004', 
      datosModificados: ['Agencia D', 'Fecha de modificación: 2023-04-30', 'Usuario responsable: Sofia'] 
    },
    { 
      nombreEquipo: 'Printer Plus', 
      codigoInventario: 'DCP005', 
      datosModificados: ['Agencia E', 'Fecha de modificación: 2023-05-05', 'Usuario responsable: Pedro'] 
    },
    // Agrega más datos según sea necesario
  ];
}