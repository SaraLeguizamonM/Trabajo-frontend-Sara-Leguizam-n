import { Routes } from '@angular/router';
import { Estudiantes } from './estudiantes/estudiantes';
import { Grupos } from './grupos/grupos';
import { Materias } from './materias/materias';
import { Evaluaciones } from './evaluaciones/evaluaciones';
import { Informes } from './informes/informes';

export const routes: Routes = [
    { path: 'estudiantes', component: Estudiantes },
    { path: 'grupos', component: Grupos },
    { path: 'materias', component: Materias },
    { path: 'evaluaciones', component: Evaluaciones },
    { path: 'informes', component: Informes },
    { path: '', redirectTo: 'estudiantes', pathMatch: 'full' }
];