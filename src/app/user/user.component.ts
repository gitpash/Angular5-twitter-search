// @ts-check

import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { TweetsService } from "../tweets.service";
import { Tweet } from "../types";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  allTweets: Tweet[] = [];

  constructor(
    private tweetsService: TweetsService,
    private spinner: NgxSpinnerService
  ) {}

  private searchSubj = new Subject<string>();

  inputSearch(query: string): void {
    this.searchSubj.next(query);
  }

  ngOnInit(): void {
    this.searchSubj
      .pipe(
        debounceTime(300), // default debounce
        distinctUntilChanged(),
        switchMap((query: string) => {
          if (!query) {
            this.allTweets = [];
            return;
          }
          /** start spinner after debounce */
          this.spinner.show();
          return this.tweetsService.getTweetsByHashtag(query, 'user');
        })
      )
      .subscribe(tweets => {
        /** spinner stop on response */
        this.spinner.hide();

        this.allTweets = tweets;
      });
  }
}
