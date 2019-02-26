import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TweetsService]
  }));

  it('should be created', () => {
    const service: TweetsService = TestBed.get(TweetsService);
    expect(service).toBeTruthy();
  });
});
