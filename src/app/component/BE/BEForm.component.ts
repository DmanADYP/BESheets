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
    template: `
     <h3 class="well container">Create Record</h3>
<form #formCtrl="ngForm" class="container" (ngSubmit)="submitBE()" novalidate>
    <div class="form-group">
        <!--new code-->
        <div class="row">
            <div class="col-md-6">
                <label for="status">LOB</label>
                <select class="form-control" name="lob" [(ngModel)]="model.lob" required>
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="status">REGION</label>
                <select class="form-control" name="region" [(ngModel)]="model.region" required>
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                </select>
            </div>
        </div>
    </div>
    <div class="form-group">
        <!--new code-->
        <div class="row">
            <div class="col-md-6">
                <label for="status">PROGRAM</label>
                <select class="form-control" name="lob" [(ngModel)]="model.lob" required>
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                </select>
            </div>
            <div class="col-md-6">
                <label for="">SERVICE LINE</label>
                <input type="text" class="form-control" rows="3" placeholder="Service Line" [(ngModel)]="model.id" name="serviceLine"
                    required/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-6">
                <label for="">SOW</label>
                <input type="text" class="form-control" rows="3" placeholder="SOW Number" [(ngModel)]="model.sow" name="sow" required />
            </div>
            <div class="col-md-6">
                <label for="">SFDC ID</label>
                <input type="text" class="form-control" rows="3" placeholder="SFDC ID" [(ngModel)]="model.sfdcid" name="sfdcid" required/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-6">
                <label for="">PROJECT DESC</label>
                <input type="text" class="form-control" rows="3" placeholder="Project Description" [(ngModel)]="model.projectdesc" name="projectdesc"
                    required/>
            </div>
            <div class="col-md-6">
                <label for="">PO #</label>
                <input type="number" class="form-control" rows="3" placeholder="PO Number" [(ngModel)]="model.ponumber" name="ponumber" required/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-6">
                <label for="">PO EXP</label>
                <input type="date" class="form-control" rows="3" placeholder="PO Expiration" [(ngModel)]="model.poExpiration" name="poExpiration"
                    required/>
            </div>
            <div class="col-md-6">
                <label for="">Project Manager</label>
                <select class="form-control" name="staus" [(ngModel)]="model.projectManager" required>
                     <option  [value]="1" [selected]="model.status ==1">Active</option>
                     <option  [value]="0" [selected]="model.status ==0">In Active</option>
                 </select>
            </div>
        </div>
    </div>
    <br>
    <div class=form-group>
        <div class="row fixed">
            <div class="col-md-6">
                <button type="submit" class="btn btn-primary btn-block" >SUBMIT</button>
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">CANCEL</button>
            </div>
            <div class="col-md-6">
            </div>
        </div>
    </div>
</form>
    `
})
// Component class
export class BEFormComponent implements OnChanges , OnInit { 
    
    // Constructor with injected service
    constructor(
        private beService: BEService
        ){

    
        }
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