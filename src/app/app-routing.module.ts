import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchTemplateComponent } from "./search-template/search-template.component";
import { HASHTAG, USER } from "./constants";

const routes: Routes = [
  { path: "", redirectTo: `/${HASHTAG}`, pathMatch: "full" },
  {
    path: HASHTAG,
    component: SearchTemplateComponent,
    data: {
      title: HASHTAG
    }
  },
  {
    path: USER,
    component: SearchTemplateComponent,
    data: {
      title: USER
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
