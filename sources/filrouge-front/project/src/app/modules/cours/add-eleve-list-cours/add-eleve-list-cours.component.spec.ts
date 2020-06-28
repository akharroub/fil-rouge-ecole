import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEleveListCoursComponent } from './add-eleve-list-cours.component';

describe('AddEleveListCoursComponent', () => {
  let component: AddEleveListCoursComponent;
  let fixture: ComponentFixture<AddEleveListCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEleveListCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEleveListCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
