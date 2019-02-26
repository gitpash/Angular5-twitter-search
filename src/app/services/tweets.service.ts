import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tweet } from "../types";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  baseURL: string = "https://am-twitter-scrape.herokuapp.com";

  constructor(private http: HttpClient) {}
  /** GET all tweets by hashtag*/
  getTweetsByHashtag(query: string, searchType: string): Observable<Tweet[]> {
    const isHashtag = searchType === "hashtag";

    return this.http.get<Tweet[]>(
      // use ternary here due to only two options, better create separate methods if there are more
      `${this.baseURL}/${isHashtag ? "hashtags" : "users"}/${query}?pages_limit=3&wait=0`
    );
  }
}
