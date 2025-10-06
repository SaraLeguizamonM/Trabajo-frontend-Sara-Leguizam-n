import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SlideBar } from "../slide-bar/slide-bar";
import { AdminEstudiantes } from "./admin-estudiantes/admin-estudiantes";
import { NgIf} from '@angular/common';
import { AdminEstudiantesRegistro } from './admin-estudiantes-registro/admin-estudiantes-registro';


@Component({
  selector: 'app-estudiantes',
  imports: [Header, SlideBar, AdminEstudiantes, NgIf, AdminEstudiantesRegistro],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class Estudiantes {
  public nuevoRegistro: boolean = false;
  registroV(){
    this.nuevoRegistro = true;
  }
  registroF(){
    this.nuevoRegistro = false;
  }

}
