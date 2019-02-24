import { Component, OnInit, EventEmitter } from "@angular/core";
import { TweetsService } from "../tweets.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(private tweetsService: TweetsService) {}

  ngOnInit() {}

  onInput(event: any): void {
    console.log(event.target.value);

    this.tweetsService.getTweetsByHashtag(event.target.value).subscribe(
      res => {
        console.log("res", res);
      },
      error => {
        console.log("fetch tweets error", error);
        // this.tweetStore$.next([]);
      }
    );
  }
}
