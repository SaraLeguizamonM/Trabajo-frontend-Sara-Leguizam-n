import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEstudiantes } from './admin-estudiantes';

describe('AdminEstudiantes', () => {
  let component: AdminEstudiantes;
  let fixture: ComponentFixture<AdminEstudiantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEstudiantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEstudiantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
