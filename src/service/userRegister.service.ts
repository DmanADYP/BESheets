import { Injectable } from "@angular/core";
import { Cookie } from "ng2-cookies/src/services";
import { Router } from "@angular/router";
import { Username } from "model/username.model";

@Injectable()
export class userRegisterService{
 parentRouter:Router;


private model = new Username('');
constructor(private _router:Router){


    this.parentRouter = _router; 
Cookie.set('cookieName', 'cookieValue');
Cookie.set('cookieName', 'cookieValue', 10 /*days from now*/);
Cookie.set('cookieName', 'cookieValue', 10, '/myapp/', 'mydomain.com');

let myCookie = Cookie.get('cookieName');

/*
* List of cookies as Object, like: { cookieName: "cookieValue", cookieName2: "cookieValue2" ... etc }
*/
let cookielist = Cookie.getAll();

// Cookie.delete('cookieName');
// Cookie.deleteAll();


}
        submitUser(model){
            //this.model = new Username('','');
        if(model._user ==undefined){
            return false;
        }else{
            sessionStorage.setItem('User',model._user);
            console.log(model._user);
           this.parentRouter.navigateByUrl('/comment');
        }
        
            
            
        }



}