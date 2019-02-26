import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";
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

  private searchSubj = new Subject<string>();

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
        distinctUntilChanged(),
        switchMap((query: string) => {
          if (!query) {
            this.allTweets = [];
            return;
          }
          /** start spinner after debounce */
          this.spinner.show();
          return this.tweetsService.getTweetsByHashtag(query, this.title);
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
