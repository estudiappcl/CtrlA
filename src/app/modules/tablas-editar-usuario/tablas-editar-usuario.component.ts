import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Usuario {
  usuario: string;
  nombre: string;
  rut: string;
  correo: string;
  perfil: string;
}

@Component({
  selector: 'app-tablas-editar-usuario',
  templateUrl: './tablas-editar-usuario.component.html',
  styleUrls: ['./tablas-editar-usuario.component.css']
})
export class TablasEditarUsuarioComponent implements AfterViewInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'rut', 'correo', 'perfil', 'acciones'];
  dataSource = new MatTableDataSource<Usuario>([
    { usuario: 'usuario1', nombre: 'Nombre1', rut: '12345678-9', correo: 'usuario1@example.com', perfil: 'Perfil1' },
    { usuario: 'usuario2', nombre: 'Nombre2', rut: '98765432-1', correo: 'usuario2@example.com', perfil: 'Perfil2' },
    { usuario: 'usuario3', nombre: 'Nombre3', rut: '24681357-9', correo: 'usuario3@example.com', perfil: 'Perfil3' },
    { usuario: 'usuario1', nombre: 'Nombre1', rut: '12345678-9', correo: 'usuario1@example.com', perfil: 'Perfil1' },
    { usuario: 'usuario2', nombre: 'Nombre2', rut: '98765432-1', correo: 'usuario2@example.com', perfil: 'Perfil2' },
    { usuario: 'usuario3', nombre: 'Nombre3', rut: '24681357-9', correo: 'usuario3@example.com', perfil: 'Perfil3' },
    { usuario: 'usuario1', nombre: 'Nombre1', rut: '12345678-9', correo: 'usuario1@example.com', perfil: 'Perfil1' },
    { usuario: 'usuario2', nombre: 'Nombre2', rut: '98765432-1', correo: 'usuario2@example.com', perfil: 'Perfil2' },
    { usuario: 'usuario3', nombre: 'Nombre3', rut: '24681357-9', correo: 'usuario3@example.com', perfil: 'Perfil3' },
    { usuario: 'usuario1', nombre: 'Nombre1', rut: '12345678-9', correo: 'usuario1@example.com', perfil: 'Perfil1' },
    { usuario: 'usuario2', nombre: 'Nombre2', rut: '98765432-1', correo: 'usuario2@example.com', perfil: 'Perfil2' },
    { usuario: 'usuario3', nombre: 'Nombre3', rut: '24681357-9', correo: 'usuario3@example.com', perfil: 'Perfil3' },
    { usuario: 'usuario1', nombre: 'Nombre1', rut: '12345678-9', correo: 'usuario1@example.com', perfil: 'Perfil1' },
    { usuario: 'usuario2', nombre: 'Nombre2', rut: '98765432-1', correo: 'usuario2@example.com', perfil: 'Perfil2' },
    { usuario: 'usuario3', nombre: 'Nombre3', rut: '24681357-9', correo: 'usuario3@example.com', perfil: 'Perfil3' },
    // Agrega más usuarios según sea necesario
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  editarUsuario(user: Usuario) {
    // Lógica para editar el usuario
    console.log('Editando usuario:', user);
    this.cerrarModalEditar();
  }


  tituloModalExito: string = '';
  mensajeModalExito: string = '';
  mensajeModalEditar: string = '';
  mostrarModalExito: boolean = false;
  mostrarModalEditar: boolean = false;
  mostrarModalEliminar: boolean = false; // Asegúrate de que esta propiedad exista
 
  //editar
  abrirModalEditar(): void {
    this.mostrarModalEditar = true;
    this.mensajeModalEditar = 'Juan Pérez';
  }

  cerrarModalEditar(): void {
    // Solo cierra el modal de eliminar
    this.mostrarModalEditar = false;
 
  }

  //eliminar
  abrirModalEliminar(): void {
    this.mostrarModalEliminar = true;
  }
  

  cerrarModalEliminar(): void {
    // Solo cierra el modal de eliminar
    this.mostrarModalEliminar = false;
  }
  // Métodos para manejar el modal de éxito, si decides implementarlo
  abrirModalExito(): void {
    this.tituloModalExito = 'Éxito';
    this.mensajeModalExito = 'Usuario JPerez ha sido eliminado con éxito.';
    this.mostrarModalExito = true;
    // Asegúrate de que el modal de eliminación está cerrado
    this.mostrarModalEliminar = false;
    
    // Luego establece el estado para mostrar el modal de éxito
  
  }

  cerrarModalExito(): void {
    this.mostrarModalExito = false;
  }


 
eliminarUsuario(user: Usuario) {
  // Lógica para eliminar el usuario aquí
  console.log('Eliminando usuario:', user);
  // Cierra primero el modal de eliminar
  this.cerrarModalEliminar();
  // No necesitas abrir el modal de éxito aquí, esto se manejará con el evento exito
}
  
}
