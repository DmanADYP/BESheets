import { Component } from "@angular/core";
import { BEService } from "service/BE.service";
import { BE } from "model/BE.model";
import { EmitterService } from "routing/emmitter.service";

@Component({
    selector:'be-form',
    templateUrl:'\BEEditCreate.component.html' 
    //template:`hello`

})export class BEUpdateComponent{
private RecordType:string ='Update';
constructor(private beService: BEService){
    
    this.beService.getOtherBE(EmitterService._id)
        .subscribe(
                result=>{
                    this.model = result[0];
                    
                }
        )
}
model = new BE()
submitBE(){
 this.beService.updateBE(this.model, EmitterService._id)
        .subscribe(
                    result=>{ 
                                this.model = new BE();
                            }
                );
}



}