import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-usuario',
  templateUrl: './ingresar-usuario.component.html',
  styleUrl: './ingresar-usuario.component.css'
})
export class IngresarUsuarioComponent {
  breadcrumbs = [
    { text: 'Home', link: '/home' },
    { text: 'Ingresar-usuario', link: '/ingresar-usuario' }
  ];
}
