/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmitterService } from "routing/emmitter.service";
import { BEService } from "service/BE.service";
import { BE } from "model/BE.model";

// Component decorator
@Component({
    selector: 'be-box',
    template: `
     <div class="panel panel-default">
            <div class="panel-heading">{{be.user}}</div>
         <ul>
            <h4>ID</h4>
                <li>{{be.id}}</li>
            <h4>Author</h4>
                <li>{{be.author}}</li>
            <h4>Text</h4>
                <li>{{be.text}}</li>
            <h4>ID</h4>    
                <li>{{be.lob}}</li>
            <h4>Region</h4>
                <li>{{be.region}}</li>
            <h4>Service Line</h4>
                <li>{{be.serviceLine}}</li>
            <h4>SOW</h4>
                <li>{{be.sow}}</li>
            <h4>SFDC ID</h4>
                <li>{{be.sfdcid}}</li>
            <h4>Project</h4>
                <li>{{be.projectdesc}}</li>
            <h4>PO Number</h4>     
                <li>{{be.ponumber}}</li>
            <h4>PO Expiration</h4>
                <li>{{be.poExpiration}}</li>
            <h4>Project Manager</h4>
                <li>{{be.projectManager}}</li>
            <h4>Status</h4>
                <li>{{be.status}}</li>
         </ul>
            <div class="panel-footer">
                <button class="btn btn-info" (click)="editBE()"><span class="glyphicon glyphicon-edit"></span></button>
                <button class="btn btn-danger" (click)="deleteBE(be.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </div>
        </div>
    `
    // No providers here because they are passed down from the parent component
})
// Component class
export class BEBoxComponent { 
    // Constructor
     constructor(
        private beService: BEService
        ){}

    // Define input properties
    @Input() be: BE;
    @Input() listId: string;
    @Input() editId:string;

    editBE() {
        // Emit edit event
        EmitterService.get(this.editId).emit(this.be);
        
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
}