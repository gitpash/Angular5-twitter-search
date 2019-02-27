import { Location } from "@angular/common";
import {
  TestBed,
  async,
  ComponentFixture,
  fakeAsync,
  tick
} from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
import { AppComponent } from "./app.component";
import { SearchTemplateComponent } from "./search-template/search-template.component";
import { SearchComponent } from "./search/search.component";
import { TweetsTableComponent } from "./tweets-table/tweets-table.component";
import { USER, HASHTAG } from "./constants";
import { routes } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

describe("AppComponent", () => {
  const APP_TITLE = "Angular Twitter";
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxSpinnerModule,
        NgxPaginationModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        SearchTemplateComponent,
        SearchComponent,
        TweetsTableComponent
      ]
    }).compileComponents();
    // re-use testBed for each test suite
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  it("should create the app", () => {
    expect(app).toBeDefined();
  });

  it(`should have as title ${APP_TITLE}`, () => {
    expect(app.title).toEqual(APP_TITLE);
  });

  it("should render title in a h1 tag", () => {
    fixture.detectChanges();

    expect(compiled.querySelector("h1").textContent).toContain(APP_TITLE);
  });

  it("should render navigation block with 2 links", () => {
    const $navBlock = compiled.querySelector("#navigation");
    const $linkBlock = $navBlock.querySelectorAll("a");

    expect($navBlock).toBeDefined();
    expect($linkBlock.length).toBe(2);
    /** compare tab titles */
    expect($linkBlock[0].textContent).toBe("Hashtag search");
    expect($linkBlock[1].textContent).toBe("User search");
  });

  /** router tests */
  it(`navigate to "" redirects you to ${HASHTAG}`, fakeAsync(() => {
    router.navigate([""]);
    tick(); // whait for redirect

    expect(location.path()).toBe(`/${HASHTAG}`);
  }));

  it(`navigate to ${USER} redirects you to ${USER}`, fakeAsync(() => {
    router.navigate([USER]);
    tick();

    expect(location.path()).toBe(`/${USER}`);
  }));

  it(`navigate to ${HASHTAG} redirects you to ${HASHTAG}`, fakeAsync(() => {
    router.navigate([HASHTAG]);
    tick();

    expect(location.path()).toBe(`/${HASHTAG}`);
  }));
});
