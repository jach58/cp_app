import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routesConfig } from './route.config';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InfoService } from './services/info.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, HelloComponent,UsuarioComponent, NavbarComponent, FormularioComponent ],
  providers: [InfoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
