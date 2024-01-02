import {Route, RouterModule, Routes} from "@angular/router";
import {CvComponent} from "./cvTech/cv/cv.component";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";


const ROUTING : Routes =[
  {path :'cv',component:CvComponent} ,
  {path :'',component:HomeComponent} ,
]
export const ROUTES=RouterModule.forRoot(ROUTING) ;

class AppRouting {
}
