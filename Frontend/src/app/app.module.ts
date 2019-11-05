import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { NewComponent } from './new/new.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

const routes: Routes = [
  { path: '', component: NewComponent },
  { path: 'display', component: SecondComponent }
  // { path: 'getData', component: NewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
