import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Informe {
  tipo: string;
  fecha: string;
}

@Component({
  selector: 'app-admin-informes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-informes.html',
  styleUrl: './admin-informes.css'
})
export class AdminInformes {
  tipoFiltro: string = "";
  fechaFiltro: string = "";

  informes: Informe[] = [
    { tipo: 'Informe de notas', fecha: '2023-10-26' },
    { tipo: 'Informe de asistencia', fecha: '2023-10-26' },
    { tipo: 'Informe de notas', fecha: '2023-11-15' },
  ];

  filteredInformes: Informe[] = this.informes;

  filtrarInformes() {
    this.filteredInformes = this.informes.filter(informe => {
      return (this.tipoFiltro === "" || informe.tipo === this.tipoFiltro) &&
             (this.fechaFiltro === "" || informe.fecha === this.fechaFiltro);
    });
  }

  limpiarFiltros() {
    this.tipoFiltro = "";
    this.fechaFiltro = "";
    this.filteredInformes = this.informes;
  }
}
