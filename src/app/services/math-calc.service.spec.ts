import { TestBed } from '@angular/core/testing';

import { MathCalcService } from './math-calc.service';

describe('MathCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathCalcService = TestBed.get(MathCalcService);
    expect(service).toBeTruthy();
  });
});
