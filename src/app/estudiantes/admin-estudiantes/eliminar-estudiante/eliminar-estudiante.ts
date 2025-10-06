import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-estudiante',
  imports: [],
  templateUrl: './eliminar-estudiante.html',
  styleUrl: './eliminar-estudiante.css'
})
export class EliminarEstudiante {
  constructor(private dialogRef: MatDialogRef<EliminarEstudiante>) {}

  closeDialog() {
    this.dialogRef.close();
  }
  confirmDelete() {
    this.dialogRef.close(true); 
  }

}
