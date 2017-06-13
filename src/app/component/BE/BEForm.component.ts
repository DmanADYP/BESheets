/* * * ./app/comments/components/comment-form.component.ts * * */
// Imports
import { Component, EventEmitter, Input, OnChanges, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { BEService } from "service/BE.service";
import { EmitterService } from "routing/emmitter.service";
import { BE } from 'model/BE.model'

// Component decorator
@Component({
    selector: 'be-form',
    templateUrl: '/BEForm.component.html'
})
// Component class
export class BEFormComponent implements OnChanges , OnInit { 
    
    // Constructor with injected service
    constructor( private beService: BEService){}
    // Local properties
    private model=  new BE();
    new 
    private editing = false;
    private childValue:string ="test";
    be:BE;
    // Input properties
     @Input() editId: string;
     @Input() listId: string;
   
    ngOnInit(): void {
        // Get all comments
         this.beService.getOtherBE(EmitterService._id)
                           .subscribe(
                               result => {
                                  
                                     this.model = new BE();
                                    this.model = result
                             }
                                   , //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
    submitBE(){
        // Variable to hold a reference of addBE/updateBE
        let beOperation:Observable<BE>;

        if(!this.editing){
            // Create a new BE
            beOperation = this.beService.addBE(this.model)
        } 

        // Subscribe to observable
        beOperation.subscribe(
                                be => {

                                    // Emit list event
                                    EmitterService.get(this.listId).emit(be);
                                    // Empty model
                                    //this.model = new BE(new Date(), '', '',['x','y']);
                                    this.model = new BE();
                                   //this.model = new BE(new Date(),'','');
                                    // Switch editing status
                                    
                                    if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((be:BE) => {
            this.model = be
            this.editing = true;
        });
    }
 }