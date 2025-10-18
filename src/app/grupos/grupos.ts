import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SlideBar } from "../slide-bar/slide-bar";
import { AdminGrupos } from "./admin-grupos/admin-grupos";
import { AdminGruposRegistro } from "./admin-grupos-registro/admin-grupos-registro";
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-grupos',
  imports: [Header, SlideBar, AdminGrupos, AdminGruposRegistro, NgIf],
  templateUrl: './grupos.html',
  styleUrl: './grupos.css'
})
export class Grupos {
  public nuevoRegistro: boolean = false;
  registroV(){
    this.nuevoRegistro = true;
  }
  registroF(){
    this.nuevoRegistro = false;
  }
}