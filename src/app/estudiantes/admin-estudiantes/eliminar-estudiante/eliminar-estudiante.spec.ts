import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstudiante } from './eliminar-estudiante';

describe('EliminarEstudiante', () => {
  let component: EliminarEstudiante;
  let fixture: ComponentFixture<EliminarEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEstudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEstudiante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
