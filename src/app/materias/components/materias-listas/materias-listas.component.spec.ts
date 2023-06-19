import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasListasComponent } from './materias-listas.component';

describe('MateriasListasComponent', () => {
  let component: MateriasListasComponent;
  let fixture: ComponentFixture<MateriasListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
