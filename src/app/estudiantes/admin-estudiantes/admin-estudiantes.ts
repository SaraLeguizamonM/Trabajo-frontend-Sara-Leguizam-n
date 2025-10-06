import { Component, inject } from '@angular/core';
import {EliminarEstudiante} from './eliminar-estudiante/eliminar-estudiante';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-estudiantes',
  imports: [],
  templateUrl: './admin-estudiantes.html',
  styleUrl: './admin-estudiantes.css'
})
export class AdminEstudiantes {
  imgQuipuxE:string="../../../assets/eyeQ.png";
  imgQuipuxB:string="../../../assets/basQ.png";
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(EliminarEstudiante);
  }
}
