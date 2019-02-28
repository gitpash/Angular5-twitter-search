import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, empty } from "rxjs";
import { catchError } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { Tweet } from "../types";
import { HASHTAG } from "../constants";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  baseURL: string = "https://am-twitter-scrape.herokuapp.com";

  constructor(private http: HttpClient) {}
  /** GET all tweets by hashtag*/
  getTweetsByHashtag(
    query: string,
    searchType: string,
    spinner: NgxSpinnerService
  ): Observable<Tweet[]> {
    const isHashtag = searchType === HASHTAG;

    return this.http
      .get<Tweet[]>(
        // use ternary here due to only two options, better create separate methods if there are more
        `${this.baseURL}/${
          isHashtag ? "hashtags" : "users"
        }/${query}?pages_limit=3&wait=0`
      )
      /** important to process error here in order to Observable NOT fail and App keep working */
      .pipe(
        catchError(err => {
          console.log("server error", err);
          spinner.hide();
          return empty();
        })
      );
  }
}
