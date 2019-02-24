import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tweets-table",
  templateUrl: "./tweets-table.component.html",
  styleUrls: ["./tweets-table.component.scss"]
})
export class TweetsTableComponent implements OnInit {
  @Input() fetchedTweets: [];
  constructor() {}

  ngOnInit() {
    console.log("f", this.fetchedTweets);
  }
}
