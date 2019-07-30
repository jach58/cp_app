import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { InfoService } from '../services/info.service';
import { Info } from '../model/info';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent  {
  form: FormGroup
  formUser: FormGroup
  modalRef: NgbModalRef
  @ViewChild("modalMensaje") modal: ElementRef
  info: Info[]
  infoUser = {
    nombre: '',
    calle: '',
    numero: '',
    colonia: '',
    codigo: ''
  }

  constructor(
    private fb:FormBuilder,
    private infoService: InfoService,
    private router: Router,
    private modalService: NgbModal) {

    this.form = this.fb.group({
        nombre: ['',Validators.required],
        codigo: ['',Validators.required]
    });

  }

  buscar() {

    const val = this.form.value;

    if (val.nombre && val.codigo) {
      this.infoUser.nombre = val.nombre;
      this.infoUser.codigo = val.codigo;
      this.infoService.loadInfoByCodigo(val.codigo).subscribe(
        (data) => {
          console.log(data)
            this.info = data;
          }
        );
    }
  }

  abrirModal(modal, colonia){
    this.formUser = this.fb.group({
      calle: ['',Validators.required],
      numero: ['',Validators.required]
    });
    this.infoUser.colonia = colonia;
    this.modalRef = this.modalService.open(modal);
  }

  guardar() {
    const val = this.formUser.value;
    this.infoUser.calle = val.calle;
    this.infoUser.numero = val.numero;
    if(val.calle && val.numero && this.infoUser.codigo && this.infoUser.nombre){
      localStorage.clear();
      localStorage.setItem('infoUser', JSON.stringify(this.infoUser));
      this.modalRef.close();
      this.router.navigateByUrl('/usuario')
    }
  }
}
