import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HashtagComponent } from "./hashtag/hashtag.component";
import { UserComponent } from "./user/user.component";
import { SearchComponent } from "./search/search.component";
import { TweetsTableComponent } from "./tweets-table/tweets-table.component";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
  declarations: [
    AppComponent,
    HashtagComponent,
    UserComponent,
    SearchComponent,
    TweetsTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
