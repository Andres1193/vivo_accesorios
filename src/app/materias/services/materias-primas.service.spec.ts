import { TestBed } from '@angular/core/testing';

import { MateriasPrimasService } from './materias-primas.service';

describe('MateriasPrimasService', () => {
  let service: MateriasPrimasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasPrimasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
