/* * * ./app/comments/components/comment-form.component.ts * * */
// Imports
import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { BEService } from "service/BE.service";
import { EmitterService } from "routing/emmitter.service";
import { BE } from 'model/BE.model'

// Component decorator
@Component({
    selector: 'be-form',
    template: `
      <form (ngSubmit)="submitBE()">
            <div class="form-group">
                
                <br />
                <!--new code-->
                <label for="status">Lob</label>
                <select class="form-control" name="lob" [(ngModel)]="model.lob">
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                </select>
                <label for="status">Region</label>
                <select class="form-control" name="region" [(ngModel)]="model.region">
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                </select>
                   <label for="status">Service Line</label>
                <textarea class="form-control" rows="3" placeholder="serviceLine" [(ngModel)]="model.serviceLine" name="serviceLine"></textarea>
                <label for="status">Sow</label>
                <textarea class="form-control" rows="3" placeholder="sow" [(ngModel)]="model.sow" name="sow"></textarea>
                <label for="status">SFDC ID</label>
                <textarea class="form-control" rows="3" placeholder="sfdcid" [(ngModel)]="model.sfdcid" name="sfdcid"></textarea>
                <label for="status">Project DESC</label>
                <textarea class="form-control" rows="3" placeholder="projectdesc" [(ngModel)]="model.projectdesc" name="projectdesc"></textarea>
                <label for="status">PO Number</label>
                <textarea class="form-control" rows="3" placeholder="ponumber" [(ngModel)]="model.ponumber" name="ponumber"></textarea>
                <label for="status">PO Expiration</label>
                <textarea class="form-control" rows="3" placeholder="poExpiration" [(ngModel)]="model.poExpiration" name="poExpiration"></textarea>
              
                
                <label for="status">Project Manager</label>
                <select class="form-control" name="staus" [(ngModel)]="model.projectManager">
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                 </select>

                <br />
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
                <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>
    `
})
// Component class
export class BEFormComponent implements OnChanges { 
    // Constructor with injected service
    constructor(
        private beService: BEService
        ){}
    // Local properties
    private model =  new BE(new Date(),  '', '',sessionStorage.getItem('User'), '', '','', '','', '','', [],'', '','');
    new 
    private editing = false;

    // Input properties
     @Input() editId: string;
     @Input() listId: string;

    submitBE(){
        // Variable to hold a reference of addBE/updateBE
        let beOperation:Observable<BE[]>;

        if(!this.editing){
            // Create a new BE
            beOperation = this.beService.addBE(this.model)
        } else {
            // Update an existing BE
             beOperation = this.beService.updateBE(this.model)
        }

        // Subscribe to observable
        beOperation.subscribe(
                                be => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(be);
                                    // Empty model
                                    //this.model = new BE(new Date(), '', '',['x','y']);
                                    this.model = new BE(new Date(), '', '', sessionStorage.getItem('User'),'', '', '','', '','', '',[], '','', '');
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