import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseIndexComponent } from './classe-index.component';

describe('ClasseIndexComponent', () => {
  let component: ClasseIndexComponent;
  let fixture: ComponentFixture<ClasseIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
