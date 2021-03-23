import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeFormComponent } from './filme-form.component';

describe('FilmeFormComponent', () => {
  let component: FilmeFormComponent;
  let fixture: ComponentFixture<FilmeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
