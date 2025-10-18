import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SlideBar } from "../slide-bar/slide-bar";
import { AdminEvaluaciones } from "./admin-evaluaciones/admin-evaluaciones";
import { AdminEvaluacionesRegistro } from "./admin-evaluaciones-registro/admin-evaluaciones-registro";
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-evaluaciones',
  imports: [Header, SlideBar, AdminEvaluaciones, AdminEvaluacionesRegistro, NgIf],
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.css'
})
export class Evaluaciones {
  public nuevoRegistro: boolean = false;
  registroV(){
    this.nuevoRegistro = true;
  }
  registroF(){
    this.nuevoRegistro = false;
  }
}