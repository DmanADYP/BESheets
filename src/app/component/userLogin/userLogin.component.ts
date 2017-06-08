import { Component} from '@angular/core';
import { EmitterService } from "routing/emmitter.service";
import {Router} from '@angular/router';

import { NavBarComponent } from "app/component/navbar/navbar.component";

@Component({
    selector:`my-login`,
    template:`
     <div>
            <user-form></user-form>
    </div>
    
    `


})export class UserLoginComponent{
    
  private listId = 'USER_COMPONENT_LIST'; 
}