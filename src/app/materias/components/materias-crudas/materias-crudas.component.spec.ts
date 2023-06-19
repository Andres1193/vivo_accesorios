import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCrudasComponent } from './materias-crudas.component';

describe('MateriasCrudasComponent', () => {
  let component: MateriasCrudasComponent;
  let fixture: ComponentFixture<MateriasCrudasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasCrudasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasCrudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
