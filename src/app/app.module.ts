import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from "app/component/about/about.component";
import { HomeComponent } from "app/component/home/home.component";
import { routing } from "routing/routing.service";
import { BEService } from "service/BE.service";
import { BEBoxComponent } from "app/component/BE/BEBox.component";
import { BEComponent } from "app/component/BE/BE.component";
import { BEListComponent } from "app/component/BE/BEList.component";
import { BEFormComponent } from "app/component/BE/BEForm.component";
import { UserLoginComponent } from "app/component/userLogin/userLogin.component";
import { UserFormComponent } from "app/component/userLogin/userForm.component";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BEBoxComponent,
    BEFormComponent,
    BEListComponent,
    BEComponent,
    UserLoginComponent,
    UserFormComponent

  ],
   exports:[
    BEBoxComponent,
    BEFormComponent,
    BEListComponent,
    BEComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BEService],
  bootstrap: [AppComponent]
})
export class AppModule { }
