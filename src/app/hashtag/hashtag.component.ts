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
  lastPage: number;
  onePageTweets = [];
  chosenPage: number;

  constructor(private tweetsService: TweetsService) {}
  private searchSubj = new Subject<string>();

  inputSearch(query: string): void {
    console.log("query!!", query);
    this.searchSubj.next(query);
  }

  calcPages(next: number): void {
    this.chosenPage = next;
    this.onePageTweets = this.allTweets.slice(
      (next - 1) * 10,
      (next - 1) * 10 + 10
    );
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
        this.lastPage = Math.ceil(tweets.length / 10);
        console.log("tweets", this.allTweets);
        console.log("lastp", this.lastPage);
        if (tweets.length <= 10) {
          this.onePageTweets = tweets;
          this.chosenPage = 0;
        } else {
          this.calcPages(1);
        }
      });
  }
}
