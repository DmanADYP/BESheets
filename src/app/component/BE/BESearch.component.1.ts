import { Component, Output, EventEmitter } from "@angular/core";
import { BE } from "model/BE.model";
import { BEService } from "service/BE.service";

@Component({
    selector:'be-search',
    templateUrl:'/BESearch.component.html',
    providers:[BEService]
})
export class BESearchComponent{
   bes: BE[];
    private results:Object;
    protected searchStr: string;
    protected captains= [];
    constructor(private beService: BEService){}
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    //needs coresponding method on parent side
    onChange(value:string) {
        //emits the value of the dropdown
        this.notifyParent.emit(value);
    }
    loadBE() 
    {
        this.beService.getBE().subscribe(result => 
                {
                    this.bes = result;
                    if(this.captains.length <=0){
                        for (let i = 1; i < result.length; i++) {
                            this.captains.push(result[i].id);
                        }
                    }
                }
            
                
                );
    }        
            
    
    }