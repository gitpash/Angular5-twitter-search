import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, of, empty } from "rxjs";
import {
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError
} from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { TweetsService } from "../services/tweets.service";
import { Tweet } from "../types";
@Component({
  selector: "app-search-template",
  templateUrl: "./search-template.component.html",
  styleUrls: ["./search-template.component.scss"]
})
export class SearchTemplateComponent implements OnInit {
  title: string = "";
  allTweets: Tweet[] = [];

  constructor(
    private route: ActivatedRoute,
    private tweetsService: TweetsService,
    private spinner: NgxSpinnerService
  ) {}

  public searchSubj = new Subject<string>();

  inputSearch(query: string): void {
    this.searchSubj.next(query);
  }

  ngOnInit() {
    /** set class property onInit for searchTemplate */
    this.route.data.subscribe(({ title }) => {
      this.title = title;
    });

    /** create pipe for query tweets */
    this.searchSubj
      .pipe(
        debounceTime(300), // default debounce
        distinctUntilChanged(), // ignore same input as prev
        switchMap((query: string) => {
          if (!query) {
            this.allTweets = [];
            /** need to return iterable here for empty str */
            return of([]);
          }
          /** start spinner after debounce */
          this.spinner.show();
          return this.tweetsService.getTweetsByHashtag(
            query,
            this.title,
            this.spinner
          );
        }),
        catchError(e => {
          this.spinner.hide();
          return empty();
        })
      )
      .subscribe(
        tweets => {
          /** spinner stop on response */
          this.spinner.hide();
          this.allTweets = tweets;
        },
        error => {
          /** spinner stop on fail */
          this.spinner.hide();
          this.allTweets = [];
        }
      );
  }
}
