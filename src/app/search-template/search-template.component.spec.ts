import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerService } from "ngx-spinner";
import { of, Observable } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { SearchTemplateComponent } from "./search-template.component";
import { SearchComponent } from "../search/search.component";
import { TweetsTableComponent } from "../tweets-table/tweets-table.component";
import { TweetsService } from "../services/tweets.service";
import { Tweet } from "../types";
import { mockTweets } from "../mocks";

describe("SearchTemplateComponent", () => {
  let component: SearchTemplateComponent;
  let fixture: ComponentFixture<SearchTemplateComponent>;

  const mockTweetsService = {
    getTweetsByHashtag: (
      query: string,
      searchType: string,
      spinner: NgxSpinnerService
    ): Observable<Tweet[]> => of(mockTweets)
  };
  const mockRoute = {
    data: of({
      title: "Hashtag"
    })
  };
  let service: TweetsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchTemplateComponent,
        SearchComponent,
        TweetsTableComponent
      ],
      imports: [NgxSpinnerModule, NgxPaginationModule, HttpClientTestingModule],
      providers: [
        { provide: TweetsService, useValue: mockTweetsService },
        { provide: ActivatedRoute, useValue: mockRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(TweetsService);
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("should have proper title from route onInit", () => {
    expect(component.title).toBe("Hashtag");
  });

  it("should pass search query from the inputSearch", () => {
    const searchQuery = "UserName";

    component.searchSubj.subscribe(query => {
      expect(query).toBe(searchQuery);
    });
    component.inputSearch(searchQuery);
  });

  it("tweetServise should return Tweets[]", fakeAsync(() => {
    // spyOn(service, "getTweetsByHashtag");
    component.searchSubj.pipe(
      debounceTime(300), // default debounce
      distinctUntilChanged(), // ignore same input as prev
      switchMap(q => service.getTweetsByHashtag(q, "user", () => {})) // implementation for NgxSpinnerService doesn't matter here
    );

    component.inputSearch("query");
    tick(500);

    expect(component.allTweets).toEqual(mockTweets);
  }));
  afterEach(() => {
    component.allTweets = [];
  });
});
