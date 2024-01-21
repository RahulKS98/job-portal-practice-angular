import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobPortalComponent} from "./components/job-portal/job-portal.component";

const routes: Routes = [{
  path: '',
  component: JobPortalComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
