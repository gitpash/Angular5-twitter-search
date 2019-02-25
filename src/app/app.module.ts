import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { TweetsTableComponent } from "./tweets-table/tweets-table.component";
import { SearchTemplateComponent } from './search-template/search-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TweetsTableComponent,
    SearchTemplateComponent
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
