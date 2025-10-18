import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-materias-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-materias-registro.html',
  styleUrl: './admin-materias-registro.css'
})
export class AdminMateriasRegistro {
  materia: any = {};
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  guardar() {
    console.log('Materia a guardar:', this.materia);
    this.save.emit(this.materia);
  }

  onCancel(){
    this.cancel.emit();
  }
}