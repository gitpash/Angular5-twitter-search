import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  baseURL: string = "https://am-twitter-scrape.herokuapp.com";

  constructor(private http: HttpClient) {}
  /** GET all tweets from the server */
  getTweets(): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}/hashtags/Python?pages_limit=3&wait=0`
    );
  }
}
