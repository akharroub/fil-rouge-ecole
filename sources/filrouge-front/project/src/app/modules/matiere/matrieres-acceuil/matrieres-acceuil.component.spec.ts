import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrieresAcceuilComponent } from './matrieres-acceuil.component';

describe('MatrieresAcceuilComponent', () => {
  let component: MatrieresAcceuilComponent;
  let fixture: ComponentFixture<MatrieresAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrieresAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrieresAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
