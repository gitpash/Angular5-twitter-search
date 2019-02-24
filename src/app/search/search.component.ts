import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @Output() inputChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onInput(event: any): void {
    console.log(event.target.value);
    // emitting event into parent
    this.inputChange.emit(event.target.value);
  }
}
