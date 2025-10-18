import { Component } from '@angular/core';
import { Header } from "../header/header";
import { SlideBar } from "../slide-bar/slide-bar";
import { AdminInformes } from "./admin-informes/admin-informes";
import { AdminInformesGenerar } from "./admin-informes-generar/admin-informes-generar";
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-informes',
  imports: [Header, SlideBar, AdminInformes, AdminInformesGenerar, NgIf],
  templateUrl: './informes.html',
  styleUrl: './informes.css'
})
export class Informes {
  public generarInforme: boolean = false;
  generarV(){
    this.generarInforme = true;
  }
  generarF(){
    this.generarInforme = false;
  }
}
