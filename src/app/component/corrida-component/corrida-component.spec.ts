import { TestBed } from '@angular/core/testing';

import { CorridaAtleta } from './corrida-component';

describe('CorridaComponent', () => {
  let service: CorridaAtleta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorridaAtleta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
