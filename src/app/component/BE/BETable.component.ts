import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, Renderer } from "@angular/core";
import { BEService } from "service/BE.service";
import { BE } from "model/BE.model";
import { EmitterService } from "routing/emmitter.service";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Component({
selector: 'my-table',
providers:[BEService],
templateUrl:'/beTable.component.html'

})export class BETableComponent {
    @Output()notify = new EventEmitter();
    parentRouter:Router;
    bes: BE[];
    private results:Object;
    protected searchStr: string;
    protected captains= [];
    protected static value;
    // Constructor
     constructor(
        private beService: BEService,private _router:Router, renderer: Renderer
        ){      
                //load all data
                this.loadBE();
                renderer.listenGlobal('document', 'click', (event) => {
                this.searchBE();
                });
        }
        //gets value from child and passeses to parents
        ;
            onChange(value:string){
             BETableComponent.value = value;
             this.searchBE();
        
        }
            searchBE(){
                let value = BETableComponent.value;
                   console.log(value);
            if(value == '' || value ==undefined){
                this.loadBE();
            }else{
            
            this.beService.getOneBE(value.trim()).subscribe(result => {
            if (result.length !== 0){
            this.bes = result
            }
                
        
            });}
            }
            
            loadBE() {

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
            deleteBE(id:string) {
                // Call removeBE() from CommenBE to delete comment
                this.beService.removeBE(id).subscribe(result=>{
                    result =>this.bes;
                    this.loadBE();
            })
                
            
            }
            submitID(value:string){
                //on click go to edit screen
                EmitterService._id = value;
                this._router.navigateByUrl('/edit');
            }
            
            

        }