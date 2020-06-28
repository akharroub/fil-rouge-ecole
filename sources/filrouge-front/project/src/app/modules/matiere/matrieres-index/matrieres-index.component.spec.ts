import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrieresIndexComponent } from './matrieres-index.component';

describe('MatrieresIndexComponent', () => {
  let component: MatrieresIndexComponent;
  let fixture: ComponentFixture<MatrieresIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrieresIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrieresIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
