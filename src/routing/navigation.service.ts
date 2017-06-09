import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class NavigationSerivce{
    constructor(private _router:Router){}
parentRouter:Router;
NavigateTo(value:string){
this._router.navigateByUrl('/'+value);
}
}