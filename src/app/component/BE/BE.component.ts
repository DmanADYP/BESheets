/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';
import { EmitterService } from "routing/emmitter.service";
import {Router} from '@angular/router';


@Component({
    selector: 'be-widget',
    template: `
        <div>
           

            <be-form [listId]="listId" [editId]="editId"></be-form>
            <be-list [listId]="listId" [editId]="editId"></be-list>
        </div>
    `,
})
export class BEComponent { 
    // Event tracking properties
    private listId = 'BE_COMPONENT_LIST';
    private editId = 'BE_COMPONENT_EDIT';
   
  
 }