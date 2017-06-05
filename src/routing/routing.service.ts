import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "app/component/home/home.component";
import { AboutComponent } from "app/component/about/about.component";
import { BEComponent } from "app/component/BE/BE.component";
import { BEListComponent } from "app/component/BE/BEList.component";
import { UserLoginComponent } from "app/component/userLogin/userLogin.component";




const appRoutes : Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'comment',
        component:BEComponent
    },
      {
        path:'com',
        component:BEListComponent
    },
      {
        path:'user',
        component:UserLoginComponent
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);