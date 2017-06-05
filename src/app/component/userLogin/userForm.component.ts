import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Username } from "model/username.model";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { userRegisterService } from "service/userRegister.service";


@Component({
    selector:'user-form',
    template:`
     <form (ngSubmit)="submitUser()">
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input type="text" class="form-control" placeholder="User Name" [(ngModel)]="model._user" name="username">
                    <input type="text" class="form-control" placeholder="Password" [(ngModel)]="model._password" name="password">
                
                </div>
                <br />
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Summit</button>
   
            </div>
        </form>
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