import { Component } from '@angular/core';
// AdminGruposRegistro removed from imports because it's not used in the template
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Grupo {
  codigo: number;
  grado: number;
  grupo: string;
  jornada?: string;
  numeroEstudiantes?: number;
}

@Component({
  selector: 'app-admin-grupos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-grupos.html',
  styleUrl: './admin-grupos.css'
})
export class AdminGrupos {
  imgQuipuxE:string="../../../assets/eyeQ.png";
  imgQuipuxB:string="../../../assets/basQ.png";

  gradoFiltro = '';
  grupoFiltro = '';

  grupos: Grupo[] = [];
  filteredGrupos: Grupo[] = this.grupos;

  filtrarGrupos() {
    this.filteredGrupos = this.grupos.filter(g =>
      (this.gradoFiltro === '' || String(g.grado) === this.gradoFiltro) &&
      (this.grupoFiltro === '' || g.grupo === this.grupoFiltro)
    );
  }

  limpiarFiltros() {
    this.gradoFiltro = '';
    this.grupoFiltro = '';
    this.filteredGrupos = this.grupos;
  }
}