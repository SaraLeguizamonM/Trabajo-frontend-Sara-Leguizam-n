import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvaluaciones } from './admin-evaluaciones';

describe('AdminEvaluaciones', () => {
  let component: AdminEvaluaciones;
  let fixture: ComponentFixture<AdminEvaluaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEvaluaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEvaluaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
