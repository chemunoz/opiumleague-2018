import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ChampionsService } from './champions.service';

describe('ChampionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: ChampionsService = TestBed.get(ChampionsService);
    expect(service).toBeTruthy();
  });
});
