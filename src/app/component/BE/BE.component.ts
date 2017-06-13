/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';
import { EmitterService } from "routing/emmitter.service";
import {Router} from '@angular/router';


@Component({
    selector: 'be-widget',
    template: `
        <div>
           
            <nav-bar></nav-bar>
           
        </div>
    `,
})
export class BEComponent { 
    //   <be-list [listId]="listId" [editId]="editId" ></be-list>
    // Event tracking properties
    private listId = 'BE_COMPONENT_LIST';
    private editId = 'BE_COMPONENT_EDIT';
   
  
 }