import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  codigo: number;
  identificacion: string;
  nombre: string;
  grado: number;
  grupo: string;
  estado: string;
}

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private baseUrl = 'http://localhost:8080/estudiantes';

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.baseUrl}/getEstudiante`);
  }

  getNextCodigo(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/nextCodigo`);
  }

  postEstudiante(payload: any) {
    return this.http.post<Estudiante>(`${this.baseUrl}/postEstudiante`, payload);
  }
}
