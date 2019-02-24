import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  currentPage = 1; // for pager and pagination
  totalItems = 9; // for pager and pagination
  maxSize = 5; // for pager

  maxPage = 10;
  constructor() {}

  ngOnInit() {}
}
