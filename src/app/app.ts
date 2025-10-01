import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Estudiantes } from "./estudiantes/estudiantes";

@Component({
  selector: 'app-root',
  imports: [Estudiantes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('escuela-quipux');
}
