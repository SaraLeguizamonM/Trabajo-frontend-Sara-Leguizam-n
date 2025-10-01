import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBar } from './slide-bar';

describe('SlideBar', () => {
  let component: SlideBar;
  let fixture: ComponentFixture<SlideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
