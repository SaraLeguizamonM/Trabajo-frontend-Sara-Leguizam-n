import { Component, inject, OnInit } from '@angular/core';
import {EliminarEstudiante} from './eliminar-estudiante/eliminar-estudiante';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstudianteService } from '../estudiante.service';

interface Estudiante {
  codigo: number;
  identificacion: string;
  nombre: string;
  grado: number;
  grupo: string;
  estado: string;
}

@Component({
  selector: 'app-admin-estudiantes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-estudiantes.html',
  styleUrl: './admin-estudiantes.css'
})
export class AdminEstudiantes {
  imgQuipuxE:string="../../../assets/eyeQ.png";
  imgQuipuxB:string="../../../assets/basQ.png";
  readonly dialog = inject(MatDialog);

  gradoFiltro: string = "";
  grupoFiltro: string = "";
  idFiltro: string = "";
  nombreFiltro: string = "";

  estudiantes: Estudiante[] = [];

  filteredEstudiantes: Estudiante[] = this.estudiantes;

  private estudianteService = inject(EstudianteService);

  filtrarEstudiantes() {
    this.filteredEstudiantes = this.estudiantes.filter(estudiante => {
      return (this.gradoFiltro === "" || estudiante.grado.toString() === this.gradoFiltro) &&
             (this.grupoFiltro === "" || estudiante.grupo === this.grupoFiltro) &&
             (this.idFiltro === "" || estudiante.identificacion.includes(this.idFiltro)) &&
             (this.nombreFiltro === "" || estudiante.nombre.toLowerCase().includes(this.nombreFiltro.toLowerCase()));
    });
  }

  limpiarFiltros() {
    this.gradoFiltro = "";
    this.grupoFiltro = "";
    this.idFiltro = "";
    this.nombreFiltro = "";
    this.filteredEstudiantes = this.estudiantes;
  }

  openDialog() {
    this.dialog.open(EliminarEstudiante);
  }
  
  ngOnInit(): void {
    // intentar cargar desde el backend; si no responde, se mantiene el arreglo vacío
    this.estudianteService.getEstudiantes().subscribe({
      next: (data) => {
        this.estudiantes = data;
        this.filteredEstudiantes = data;
      },
      error: (err) => {
        console.warn('No se pudo obtener estudiantes desde backend:', err);
      }
    });
  }
}