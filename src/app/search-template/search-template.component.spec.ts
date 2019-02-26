import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
import { of } from "rxjs";
import { HttpClientModule } from "@angular/common/http";

import { SearchTemplateComponent } from "./search-template.component";
import { SearchComponent } from "../search/search.component";
import { TweetsTableComponent } from "../tweets-table/tweets-table.component";
import { TweetsService } from "../services/tweets.service";

describe("SearchTemplateComponent", () => {
  let component: SearchTemplateComponent;
  let fixture: ComponentFixture<SearchTemplateComponent>;
  const mockTweetsService = {
    getTweetsByHashtag: () => of([])
  };
  const mockRoute = {
    data: of({
      title: "Hashtag"
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchTemplateComponent,
        SearchComponent,
        TweetsTableComponent
      ],
      imports: [NgxSpinnerModule, NgxPaginationModule],
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
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
