import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TweetsService } from "./tweets.service";

describe("TweetsService", () => {
  let service: TweetsService;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj("ValueService", ["getValue"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TweetsService]
    });
  }));
  beforeEach(() => {
    service = TestBed.get(TweetsService);
  });

  it("should be created", () => {
    expect(service).toBeDefined();
  });
});
