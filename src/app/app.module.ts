import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'usuario', component: UsuarioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
