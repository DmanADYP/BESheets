import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Username } from "model/username.model";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { userRegisterService } from "service/userRegister.service";
import { NavBarComponent } from "app/component/navbar/navbar.component";

@Component({
    selector:'user-form',
    template:`
    <div class = "container">
	<div class="wrapper">

    <h3 class="form-signin-heading">Welcome Back! Please Sign In</h3>
			  <hr class="colorgraph"><br>
     <form (ngSubmit)="submitUser()" class="form-signin">

     
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control" placeholder="User Name" [(ngModel)]="model._user" name="username">
                    <input type="text" class="form-control" placeholder="Password" [(ngModel)]="model._password" name="password">
                
                </div>
                <br />
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Submit</button>
   
            </div>
        </form>
        </div>
        </div>
    `,
    providers:[userRegisterService]
})
export class UserFormComponent{
    private model = new Username('');
    
   constructor(private userService:userRegisterService ){}
submitUser(){
    this.userService.submitUser(this.model);
}
  

}