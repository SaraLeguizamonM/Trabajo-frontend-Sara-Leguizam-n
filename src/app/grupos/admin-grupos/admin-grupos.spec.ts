import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrupos } from './admin-grupos';

describe('AdminGrupos', () => {
  let component: AdminGrupos;
  let fixture: ComponentFixture<AdminGrupos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGrupos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGrupos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
