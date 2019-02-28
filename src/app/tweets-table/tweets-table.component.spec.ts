import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxPaginationModule } from "ngx-pagination";

import { TweetsTableComponent } from "./tweets-table.component";
import { mockTweets } from "../mocks";

describe("TweetsTableComponent", () => {
  let component: TweetsTableComponent;
  let fixture: ComponentFixture<TweetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetsTableComponent],
      imports: [NgxPaginationModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("should process tweets text", () => {
    const shortText = "very short";

    expect(component.formatTweets(mockTweets[0].text)).toBe(
      mockTweets[0].text.substr(0, 50) + "..."
    );
    expect(component.formatTweets(shortText)).toBe(shortText);
  });

  it("should process hashtags", () => {
    const twoHashtags = ["#tag1", "#tag2"];
    /** 0 tweet contains no hashtags */
    expect(component.formatTags(mockTweets[0].hashtags)).toBe("-");
    /** same output for <= 2 */
    expect(component.formatTags(twoHashtags)).toEqual(twoHashtags);
    /** trim first 2 for more than 2 */
    expect(component.formatTags(["#tag1", "#tag2", "#tag3"])).toEqual(twoHashtags);
  });

  /** didn't make the rest tweet properties as methods due to simlicity */
});
