import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';//manually define
import {HttpModule} from '@angular/http';//manually define
import { RouterModule, Routes } from '@angular/router';//manually define

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {DataService} from './services/data.service';//manually define
import { AboutComponent } from './components/about/about.component';
const Rakib : Routes=[
    {path:'',component:UserComponent},
    {path:'about',component:AboutComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,//add component
    AboutComponent//add component
  ],
  imports: [
    BrowserModule,
    FormsModule,//manually define
    HttpModule,//manually define
    RouterModule.forRoot(Rakib)//manually define
  ],
  providers: [DataService],//manually define
  bootstrap: [AppComponent]
})
export class AppModule { }
