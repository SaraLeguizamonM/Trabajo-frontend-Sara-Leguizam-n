import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-evaluaciones-registro',
  imports: [],
  templateUrl: './admin-evaluaciones-registro.html',
  styleUrl: './admin-evaluaciones-registro.css'
})
export class AdminEvaluacionesRegistro {

  @Output() cancel = new EventEmitter<void>();

  onCancel(){
    this.cancel.emit();
  }

}