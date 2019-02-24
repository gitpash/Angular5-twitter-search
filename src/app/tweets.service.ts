import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// TODO: move to interfaces
export interface Tweet {
  account: {
    fullname: string;
    href: string;
    id: number;
  };
  date: string;
  hashtags: string[];
  likes: number;
  replies: number;
  retweets: number;
  text: string;
}

@Injectable({
  providedIn: "root"
})
export class TweetsService {
  baseURL: string = "https://am-twitter-scrape.herokuapp.com";

  constructor(private http: HttpClient) {}
  /** GET all tweets by hashtag*/
  getTweetsByHashtag(query: string): Observable<Tweet[]> {
    return this.http.get<any>(
      `${this.baseURL}/hashtags/${query}Python?pages_limit=3&wait=0`
    );
  }
}
