import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursIndexComponent } from './cours-index.component';

describe('CoursIndexComponent', () => {
  let component: CoursIndexComponent;
  let fixture: ComponentFixture<CoursIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
