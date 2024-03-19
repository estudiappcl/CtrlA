import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { DataUsuarioRutComponent } from './modules/data-usuario-rut/data-usuario-rut.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { ConsultaIndividualComponent } from './modules/consulta-individual/consulta-individual.component';
import { ConsultaMasivaComponent } from './modules/consulta-masiva/consulta-masiva.component';
import { IngresoIndividualComponent } from './modules/ingreso-individual/ingreso-individual.component';
import { EditarUsuarioComponent } from './modules/editar-usuario/editar-usuario.component';
import { ModalPasswordComponent } from './modules/Custom/modal-password/modal-password.component';
import { RecoverPasswordComponent } from './modules/recover-password/recover-password.component';
import { ModalExitosoComponent } from './modules/Custom/modal-exitoso/modal-exitoso.component';
import { TableModule } from 'primeng/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TablasComponent } from './modules/Custom/tablas/tablas.component';
import { ModalConsultaMasivaComponent } from './modules/Custom/modal-consulta-masiva/modal-consulta-masiva.component';
import { ModalConsultaIndividualComponent } from './modules/Custom/modal-consulta-individual/modal-consulta-individual.component';
import { ModalGestionUsuarioComponent } from './modules/Custom/modal-gestion-usuario/modal-gestion-usuario.component';
import { ModalCargaMasivaComponent } from './modules/Custom/modal-carga-masiva/modal-carga-masiva.component';
import { ModalHistorialEquipoComponent } from './modules/Custom/modal-historial-equipo/modal-historial-equipo.component';
import { TablasEditarUsuarioComponent } from './modules/tablas-editar-usuario/tablas-editar-usuario.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    DataUsuarioRutComponent,
    ConsultaIndividualComponent,
    ConsultaMasivaComponent,
    IngresoIndividualComponent,
    EditarUsuarioComponent,
    ModalPasswordComponent,
    RecoverPasswordComponent,
    ModalExitosoComponent,
    TablasComponent,
    ModalConsultaMasivaComponent,
    ModalConsultaIndividualComponent,
    ModalGestionUsuarioComponent,
    ModalCargaMasivaComponent,
    ModalHistorialEquipoComponent,
    TablasEditarUsuarioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Añade AppRoutingModule aquí
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    MenuModule,
    DividerModule,
    CalendarModule,
    FormsModule,
    TableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}