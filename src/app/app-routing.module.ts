import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
