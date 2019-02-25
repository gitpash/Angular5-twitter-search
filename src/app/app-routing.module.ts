import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HashtagComponent } from "./hashtag/hashtag.component";
import { UserComponent } from "./user/user.component";

const HASHTAG_TITLE = "Hashtag";

const routes: Routes = [
  { path: "", redirectTo: "/hashtag", pathMatch: "full" },
  {
    path: "hashtag",
    component: HashtagComponent,
    data: {
      title: HASHTAG_TITLE
    }
  },
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
