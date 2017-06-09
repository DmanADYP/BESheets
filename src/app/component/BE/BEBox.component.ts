/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { EmitterService } from "routing/emmitter.service";
import { BEService } from "service/BE.service";
import { BE } from "model/BE.model";

// Component decorator
@Component({
    selector: 'be-box',
    template: `
     <div class="panel panel-default">
         
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editBE()"><span class="glyphicon glyphicon-edit"></span></button>
            </div>
        </div>
    `
    // No providers here because they are passed down from the parent component
})
// Component class
export class BEBoxComponent implements OnInit { 
    bes: BE[];
    @Input() be: BE;
    @Input() listId: string;
    @Input() editId:string;
   
    // Constructor
     constructor(
        private beService: BEService
        ){
           
        }

    // Define input properties
   

    editBE() {
        //  let beOperation:Observable<BE>;
        // // Emit edit event
        // beOperation = this.beService.updateBE(this.model)
        

        // // Subscribe to observable
        // beOperation.subscribe(
        //                         be => {
        //                             // Emit list event
        //                             EmitterService.get(this.listId).emit(be);
        //                             // Empty model
        //                             //this.model = new BE(new Date(), '', '',['x','y']);
        //                             this.model = new BE(new Date(), '', '', sessionStorage.getItem('User'),'', '', '','', '','', '',[], '','', '');
        //                            //this.model = new BE(new Date(),'','');
        //                             // Switch editing status
                                    
        //                             if(this.editing) this.editing = !this.editing;
        //                         }, 
        //                         err => {
        //                             // Log errors if any
        //                             console.log(err);
        //                         });
    }

    deleteBE(id:string) {
        // Call removeBE() from CommenBE to delete comment
        this.beService.removeBE(id).subscribe(
                                be => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(be);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
    loadBE(id:string) {
      
        // Get all comments
         this.beService.getOneBE(id)
                           .subscribe(
                               comments => this.bes = comments, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
     ngOnInit(): void {
         EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadBE(EmitterService._id)});
EmitterService.get('BE_COMPONENT_EDIT').emit(this.be);
 console.log(this.be);
    }
}