import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  it("should render capitalized search title and placeholder", () => {
    component.searchTitle = "user";
    fixture.detectChanges();

    expect(compiled.querySelector(".search-label").textContent).toBe(
      "User search"
    );
    expect(
      (<HTMLInputElement>compiled.querySelector(".input-search")).placeholder
    ).toBe("Search by user");
  });

  it("should emit event on keyUp", () => {
    spyOn(component.inputChange, "emit");

    let comp = fixture.nativeElement.querySelector("input");
    comp.dispatchEvent(new Event("keyup"));

    fixture.detectChanges();

    expect(component.inputChange.emit).toHaveBeenCalled();
  });
});
