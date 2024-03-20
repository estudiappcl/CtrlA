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
  }
  mostrarModalExito: boolean = false;
  mostrarModalEliminar: boolean = false; // Asegúrate de que esta propiedad exista
 
  abrirModalEliminar(): void {
    this.mostrarModalEliminar = true;
  }

  cerrarModalEliminar(): void {
    this.mostrarModalEliminar = false;
  }

  // Métodos para manejar el modal de éxito, si decides implementarlo
  abrirModalExito(): void {
    this.mostrarModalExito = true;
  }

  cerrarModalExito(): void {
    this.mostrarModalExito = false;
  }


  eliminarUsuario(user: Usuario) {
    // Lógica para eliminar el usuario aquí
    console.log('Eliminando usuario:', user);
    // Cierra primero el modal de eliminar
    this.cerrarModalEliminar();
    // Luego abre el modal de éxito
    this.abrirModalExito();
  }
  
}
