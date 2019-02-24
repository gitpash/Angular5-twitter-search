import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HashtagComponent } from "./hashtag/hashtag.component";
import { UserComponent } from "./user/user.component";
import { SearchComponent } from './search/search.component';
import { TweetsTableComponent } from './tweets-table/tweets-table.component';

@NgModule({
  declarations: [AppComponent, HashtagComponent, UserComponent, SearchComponent, TweetsTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
