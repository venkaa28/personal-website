import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactMeComponent} from "./pages/contact-me/contact-me.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {ProjectsComponent} from "./pages/projects/projects.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
