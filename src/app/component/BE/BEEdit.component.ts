import { Component, OnInit } from "@angular/core";
import { BEService } from "service/BE.service";
import { EmitterService } from "routing/emmitter.service";
import { BE } from "model/BE.model";
import { Observable } from "rxjs/Observable";

@Component({
    selector:'be-edit',
    providers:[BEService],
    template:`
    <h3 class="well container">Update Record</h3>
<form #formCtrl="ngForm" class="container" (ngSubmit)="submitBE()" novalidate>
    <div class="form-group">
        <!--new code-->
        <div class="row">
           
            
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
                <input type="text" class="form-control" rows="3" placeholder="Service Line" [(ngModel)]="model[0].id" name="serviceLine"
                    required/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-6">
                <label for="">SOW</label>
                <input type="text" class="form-control" rows="3" placeholder="SOW Number" [(ngModel)]="model[0].sow" name="sow" required />
            </div>
            <div class="col-md-6">
                <label for="">SFDC ID</label>
                <input type="text" class="form-control" rows="3" placeholder="SFDC ID" [(ngModel)]="model[0].sfdcid" name="sfdcid" required/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-6">
                <label for="">PROJECT DESC</label>
                <input type="text" class="form-control" rows="3" placeholder="Project Description" [(ngModel)]="model[0].projectdesc" name="projectdesc"
                    required/>
            </div>
            <div class="col-md-6">
                <label for="">PO #</label>
                <input type="number" class="form-control" rows="3" placeholder="PO Number" [(ngModel)]="model[0].ponumber" name="ponumber" required/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col-md-6">
                <label for="">PO EXP</label>
                <input type="date" class="form-control" rows="3" placeholder="PO Expiration" [(ngModel)]="model[0].poExpiration" name="poExpiration"
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
              <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">UPDATE</button>
            </div>
            <div class="col-md-6">
            </div>
        </div>
    </div>
</form>
    `

})export class BeEditComponent implements OnInit{
   
    private model= new BE();
    private editing = true;
    constructor(private beService: BEService) 
    {
beService.getOtherBE(EmitterService._id)
.subscribe(result=>
{this.model =result
console.log(this.model[0].id);

});
    }
 ngOnInit(): void 
    {
        
    }
     submitBE(){
        // Variable to hold a reference of addBE/updateBE
        let beOperation:Observable<BE[]>;
 
        // Emit edit event
        beOperation = this.beService.updateBE(this.model,this.model[0].id)
        

        // Subscribe to observable
        beOperation.subscribe(
                                be => {
                                  
                                    this.model = new BE();
                                    
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
        
     }
    
}