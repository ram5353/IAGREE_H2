import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { FirstComponent } from './first/first.component';
import {SecondComponent} from './second/second.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
