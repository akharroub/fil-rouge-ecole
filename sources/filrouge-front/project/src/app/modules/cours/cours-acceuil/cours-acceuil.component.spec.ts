import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursAcceuilComponent } from './cours-acceuil.component';

describe('CoursAcceuilComponent', () => {
  let component: CoursAcceuilComponent;
  let fixture: ComponentFixture<CoursAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
