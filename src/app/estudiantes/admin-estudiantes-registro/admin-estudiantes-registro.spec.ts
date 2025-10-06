import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEstudiantesRegistro } from './admin-estudiantes-registro';

describe('AdminEstudiantesRegistro', () => {
  let component: AdminEstudiantesRegistro;
  let fixture: ComponentFixture<AdminEstudiantesRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEstudiantesRegistro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEstudiantesRegistro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
