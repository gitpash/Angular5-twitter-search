import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tweets-table",
  templateUrl: "./tweets-table.component.html",
  styleUrls: ["./tweets-table.component.scss"]
})
export class TweetsTableComponent implements OnInit {
  /** pagination */
  p: number = 1;

  @Input() fetchedTweets: [];

  constructor() {}

  ngOnInit() {}

  formatTweets(tweet: string) {
    if (tweet.length < 50) return tweet;

    return `${tweet.substr(0, 50)}...`;
  }

  formatTags(tags: string[]) {
    if (tags.length <= 2) {
      return tags.length ? tags : "-";
    }

    return tags.slice(0, 1);
  }
}
