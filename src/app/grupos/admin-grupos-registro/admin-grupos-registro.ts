import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-grupos-registro',
  imports: [],
  templateUrl: './admin-grupos-registro.html',
  styleUrl: './admin-grupos-registro.css'
})
export class AdminGruposRegistro {

  @Output() cancel = new EventEmitter<void>();

  onCancel(){
    this.cancel.emit();
  }

}