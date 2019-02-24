import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HashtagComponent } from "./hashtag/hashtag.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", redirectTo: "/hashtag", pathMatch: "full" },
  { path: "hashtag", component: HashtagComponent },
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
