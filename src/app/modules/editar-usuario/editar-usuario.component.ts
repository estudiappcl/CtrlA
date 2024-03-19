import { Component } from '@angular/core';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent   {
  showTable = false;



  onSearch() {

    this.showTable = true;
  }

 


  breadcrumbs = [
    { text: 'Home', link: '/home' },
    { text: 'editar-usuario', link: '/editar-usuario' }
  ];
}
