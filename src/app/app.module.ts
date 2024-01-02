import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import {ListCvEmbaucheComponent} from "./cvTech/list-cv-embauche/list-cv-embauche.component";
import {ToastrModule, ToastrService} from "ngx-toastr";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    CvComponent,
    ListCvEmbaucheComponent,
    HomeComponent,
    NavbarComponent
  ] ,
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule,
    ROUTES
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
