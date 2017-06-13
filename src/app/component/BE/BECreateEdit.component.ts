import { Component } from "@angular/core";
import { BEService } from "service/BE.service";
import { BE } from "model/BE.model";

@Component({
    selector:'be-form',
    templateUrl:'\BEEditCreate.component.html' 
    //template:`hello`

})export class CreateEditComponent{
constructor(private beService: BEService){}
model = new BE()
submitBE(){
 this.beService.addBE(this.model)
        .subscribe(
                    result=>{ 
                                this.model = new BE();
                            }
                );
}



}