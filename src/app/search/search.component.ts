import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchTitle: string = "";

  @Input()
  public title: string;

  @Output() inputChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.searchTitle = this.title;
  }

  onInput(event: any): void {
    console.log(event.target.value);
    // emitting event into parent
    this.inputChange.emit(event.target.value);
  }
}
