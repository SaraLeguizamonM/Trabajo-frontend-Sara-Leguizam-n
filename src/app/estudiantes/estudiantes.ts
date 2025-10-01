import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SlideBar } from "../slide-bar/slide-bar";
import { AdminEstudiantes } from "./admin-estudiantes/admin-estudiantes";

@Component({
  selector: 'app-estudiantes',
  imports: [Header, SlideBar, AdminEstudiantes],
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class Estudiantes {

}
