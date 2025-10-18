import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformes } from './admin-informes';

describe('AdminInformes', () => {
  let component: AdminInformes;
  let fixture: ComponentFixture<AdminInformes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInformes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInformes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
