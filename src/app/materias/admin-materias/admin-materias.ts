import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-materias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-materias.html',
  styleUrl: './admin-materias.css'
})
export class AdminMaterias {
  @Output() crearRegistro = new EventEmitter<void>();
  imgQuipuxE:string="../../../assets/eyeQ.png";
  imgQuipuxB:string="../../../assets/basQ.png";

  // filtros y datos de ejemplo
  codigoFiltro: string = '';
  nombreFiltro: string = '';
  gradoFiltro: string = '';

  materias: any[] = [
    { codigo: 'MAT001', nombre: 'Matemáticas', grado: '10', intensidad: 3 },
    { codigo: 'MAT002', nombre: 'Lengua', grado: '9', intensidad: 2 },
    { codigo: 'MAT003', nombre: 'Ciencias', grado: '11', intensidad: 4 }
  ];

  filteredMaterias: any[] = [];

  constructor(){
    // iniciar lista filtrada
    this.filteredMaterias = [...this.materias];
  }

  filtrarMaterias(){
    const codigo = (this.codigoFiltro || '').toLowerCase();
    const nombre = (this.nombreFiltro || '').toLowerCase();
    const grado = (this.gradoFiltro || '').toString();

    this.filteredMaterias = this.materias.filter(m => {
      const matchCodigo = codigo ? (m.codigo || '').toLowerCase().includes(codigo) : true;
      const matchNombre = nombre ? (m.nombre || '').toLowerCase().includes(nombre) : true;
      const matchGrado = grado ? (grado === '' ? true : (m.grado || '').toString() === grado) : true;
      return matchCodigo && matchNombre && matchGrado;
    });
  }

  limpiarFiltros(){
    this.codigoFiltro = '';
    this.nombreFiltro = '';
    this.gradoFiltro = '';
    this.filteredMaterias = [...this.materias];
  }

  crear() {
    this.crearRegistro.emit();
  }
}