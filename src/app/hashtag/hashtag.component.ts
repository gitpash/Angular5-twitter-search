import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { TweetsService } from "../tweets.service";

@Component({
  selector: "app-hashtag",
  templateUrl: "./hashtag.component.html",
  styleUrls: ["./hashtag.component.scss"]
})
export class HashtagComponent implements OnInit {
  allTweets = [];

  constructor(private tweetsService: TweetsService) {}
  private searchSubj = new Subject<string>();

  inputSearch(query: string): void {
    console.log("query!!", query);
    this.searchSubj.next(query);
  }
  ngOnInit(): void {
    this.searchSubj
      .pipe(
        debounceTime(300), // default debounce
        distinctUntilChanged(),
        switchMap((query: string) =>
          this.tweetsService.getTweetsByHashtag(query)
        )
      )
      .subscribe(tweets => {
        this.allTweets = tweets;
        console.log("tweets", this.allTweets);
      });
  }
}
