import { Component, signal } from '@angular/core';
// AdminEvaluacionesRegistro removed from imports because it's not used in the template
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Evaluacion {
  id: number;
  estudiante: string;
  materia: string;
  periodo: string;
  nota: number;
  estado?: string;
}

@Component({
  selector: 'app-admin-evaluaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-evaluaciones.html',
  styleUrl: './admin-evaluaciones.css'
})
export class AdminEvaluaciones {
  imgQuipuxE:string="../../../assets/eyeQ.png";
  imgQuipuxB:string="../../../assets/basQ.png";

  estudianteFiltro = '';
  materiaFiltro = '';
  periodoFiltro = '';

  evaluaciones: Evaluacion[] = [];
  filteredEvaluaciones: Evaluacion[] = this.evaluaciones;

  filtrarEvaluaciones() {
    this.filteredEvaluaciones = this.evaluaciones.filter(e =>
      (this.estudianteFiltro === '' || e.estudiante.toLowerCase().includes(this.estudianteFiltro.toLowerCase())) &&
      (this.materiaFiltro === '' || e.materia === this.materiaFiltro) &&
      (this.periodoFiltro === '' || e.periodo === this.periodoFiltro)
    );
  }

  limpiarFiltros() {
    this.estudianteFiltro = '';
    this.materiaFiltro = '';
    this.periodoFiltro = '';
    this.filteredEvaluaciones = this.evaluaciones;
  }
}