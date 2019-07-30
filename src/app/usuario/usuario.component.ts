import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit  {
  usuario: String;

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('infoUser'));
  }
}