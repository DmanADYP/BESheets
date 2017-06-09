import { Component, OnInit } from "@angular/core";
import { BEService } from "service/BE.service";
import { EmitterService } from "routing/emmitter.service";
import { BE } from "model/BE.model";
import { Observable } from "rxjs/Observable";
import { NavigationSerivce } from "routing/navigation.service";

@Component({
    selector:'be-edit',
    providers:[BEService,NavigationSerivce],
    template:`
    <nav-bar></nav-bar>
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


<div class="container">
<table class="table table-bordered table-striped table-inverse">
        <thead>
            <tr class="bg-primary">
                <th></th>
                <th>MONTH 1</th>
                <th>MONTH 2</th>
                <th>MONTH 3</th>
                <th>MONTH 4</th>
                <th>MONTH 5</th>
                <th>Q1</th>
                <th>Q2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="" scope="row">Forcast</th>
                <td><input type="text" #MonthOneInput (keyup)=onChange(MonthOneInput.value,1) [(ngModel)]="A"/></td>
                <td><input type="text" #MonthTwoInput (keyup)=onChange(MonthTwoInput.value,2) [(ngModel)]="B"/></td>
                <td><input type="text" #MonthThreeInput (keyup)=onChange(MonthThreeInput.value,3) [(ngModel)]="C" /></td>
                <td><input type="text" #MonthFourInput (keyup)=onChange(MonthFourInput.value,4) [(ngModel)]="D" /></td>
                <td><input type="text" #MonthFiveInput (keyup)=onChange(MonthFiveInput.value,5) [(ngModel)]="E" /></td>
                <td class="text-primary">{{A+B+C+D+E}}</td>
                <td class="text-primary">$xx.xxx</td>
            </tr>
            <tr>
                <th scope="row">Actuals</th>
                <td><input type="text" [(ngModel)]="A"/></td>
                <td><input type="text" [(ngModel)]="B"/></td>
                <td><input type="text" [(ngModel)]="C" /></td>
                <td><input type="text" [(ngModel)]="D" /></td>
                <td><input type="text" [(ngModel)]="E" /></td>
                <td class="text-primary">$xx.xxx</td>
                <td class="text-primary">$xx.xxx</td>
            </tr>
            <tr>
                <th scope="row">Accruals</th>
                <td><input type="text" [(ngModel)]="A"/></td>
                <td><input type="text" [(ngModel)]="B"/></td>
                <td><input type="text" [(ngModel)]="C" /></td>
                <td><input type="text" [(ngModel)]="D" /></td>
                <td><input type="text" [(ngModel)]="E" /></td>
                <td class="text-primary">$xx.xxx</td>
                <td class="text-primary">$xx.xxx</td>
            </tr>
            <tr>
                <th scope="row">Velocity</th>
                <td><input type="text" [(ngModel)]="A"/></td>
                <td><input type="text" [(ngModel)]="B"/></td>
                <td><input type="text" [(ngModel)]="C" /></td>
                <td><input type="text" [(ngModel)]="D" /></td>
                <td><input type="text" [(ngModel)]="E" /></td>
                <td class="text-primary">$xx.xxx</td>
                <td class="text-primary">$xx.xxx</td>
            </tr>
            <tr class="text-primary">
                <th scope="row">Gap</th>
                <td>{{A+B+C}}</td>
                <td>{{A+B+C}}</td>
                <td>{{A+B+C}}</td>
                <td>{{A+B+C}}</td>
                <td>{{A+B+C}}</td>
                <td>{{A+B+C}}</td>
                <td>{{A+B+C}}</td>
            </tr>
        </tbody>
    </table>
    <div class="row text-right">
        <div class="col-4">
            <button class="btn btn-info">Cancel</button>
            <button class="btn btn-info">Update</button>
            <button class="btn btn-info">Submit</button>
        </div>
    </div>
</div>
    `

})export class BeEditComponent implements OnInit{
    private A:number=0;
    private B:number=0;
    private C:number=0;
    private D:number=0;
    private E:number=0;
    private F:number=0;
    private G:number=0;
    private model= new BE();
    private editing = true;
    constructor(private beService: BEService, private navService:NavigationSerivce) 
    {
beService.getOtherBE(EmitterService._id)
.subscribe(result=>
{this.model =result
console.log(this.model[0].id);

});
    }
    onChange(value,id){

        switch (id) {
            case 1:
                this.A = value;
                break;
            case 2:
               this.B = value;
                break;
            case 3:
               this.C = value;
                break;
            case 4:
               this.D = value;
                break;
            case 5:
               this.E = value;
                break;
            default:

        }

        this.A = value
        //alert(id);
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
                                  
                                    this.model;
                                    
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                }
                                );
      this.navService.NavigateTo('home');  
     }
    
}