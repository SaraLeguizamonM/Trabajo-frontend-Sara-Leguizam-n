import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaterias } from './admin-materias';

describe('AdminMaterias', () => {
  let component: AdminMaterias;
  let fixture: ComponentFixture<AdminMaterias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMaterias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMaterias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
