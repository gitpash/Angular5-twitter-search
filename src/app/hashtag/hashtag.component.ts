import { Component, OnInit } from "@angular/core";
import { TweetsService } from "../tweets.service";

@Component({
  selector: "app-hashtag",
  templateUrl: "./hashtag.component.html",
  styleUrls: ["./hashtag.component.scss"]
})
export class HashtagComponent implements OnInit {
  allTweets = [];
  constructor(private tweetsService: TweetsService) {}

  ngOnInit() {
    this.getTweets();
  }
  getTweets(): void {
    this.tweetsService.getTweets().subscribe(tweets => {
      this.allTweets = tweets;
      console.log("allTweets", this.allTweets);
    });
  }
}
