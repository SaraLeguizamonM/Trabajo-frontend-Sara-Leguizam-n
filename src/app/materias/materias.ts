import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SlideBar } from "../slide-bar/slide-bar";
import { AdminMaterias } from "./admin-materias/admin-materias";
import { AdminMateriasRegistro } from "./admin-materias-registro/admin-materias-registro";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [Header, SlideBar, AdminMaterias, AdminMateriasRegistro, NgIf],
  templateUrl: './materias.html',
  styleUrl: './materias.css'
})
export class Materias {
  public nuevoRegistro: boolean = false;
  registroV(){
    this.nuevoRegistro = true;
  }
  registroF(){
    this.nuevoRegistro = false;
  }

  // Called when child registro emits a saved materia
  onMateriaSaved(materia: any) {
    // minimal handling: log and close the registro form
    console.log('Nueva materia guardada:', materia);
    this.registroF();
  }
}