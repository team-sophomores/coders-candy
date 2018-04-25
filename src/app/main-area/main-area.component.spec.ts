import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAreaComponent } from './main-area.component';

describe('MainAreaComponent', () => {
  let component: MainAreaComponent;
  let fixture: ComponentFixture<MainAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
