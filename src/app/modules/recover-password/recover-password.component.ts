import { Component} from '@angular/core';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  password: string = '';
  showPassword: boolean = false;
  tituloModal: string = '';
  mensajeModal: string = '';
  mostrarModal: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  abrirModalExitoso(): void {
    this.tituloModal = 'Contraseña actualizada';
    this.mensajeModal = 'Su contraseña se ha actualizado con éxito, presione volver para dirigirse al login.';
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
