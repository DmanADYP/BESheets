import { Component } from '@angular/core';
import { EmitterService } from "routing/emmitter.service";

@Component({
    selector:'about',
    template:' <be-list [listId]="listId" [editId]="editId"></be-list>'
})
export class AboutComponent{
// Event tracking properties
    private listId = 'BE_COMPONENT_LIST';
    private editId = 'BE_COMPONENT_EDIT';
}