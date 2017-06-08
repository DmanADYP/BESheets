/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import { Component, OnInit, Input, OnChanges, Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BEService } from "service/BE.service";
import { EmitterService } from "routing/emmitter.service";
import { BE } from 'model/BE.model'
import { Subject } from "rxjs/Subject";





// Component decorator
@Component({
    selector: 'be-list',
    providers:[BEService],
    template: `

<input
    (keyup)="searchTerm$.next($event.target.value)">

<ul *ngIf="results">
  <li *ngFor="let result of results | slice:0:9">
    <a href="{{ result.id }}" target="_blank">
      {{ result.id }}
    </a>
  </li>
</ul>



        <be-box 
        [editId]="editId" 
        [listId]="listId" 
        *ngFor="let be of bes" 
        [be]="be">

    </be-box>
    `
})
@Directive({
selector:'[surround]'
})
// Component class
export class BEListComponent implements OnInit, OnChanges{
     private model =  new BE(new Date(),  '', '','', '', '','', '','', '','', [],'','', '');
     private editing = false;
     private temps:BE[];
     private results:Object;
     private searchTerm$ = new Subject<string>();
    // Local properties
    bes: BE[];
    // Input properties
    @Input() listId: string;
    @Input() editId: string;

    // Constructor with injected service
 constructor(private beService: BEService ) {

      
 }

    ngOnInit() {
            // Load comments
            this.loadBE()
            console.log(sessionStorage.getItem('User'));
            
     this.beService.search(this.searchTerm$)
     .subscribe(result=> {this.results = result
         , console.log(result)
        });
    }



    loadBE() {
        // Get all comments
         this.beService.getBE()
                           .subscribe(
                               comments => this.bes = comments, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges(changes:any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadBE()});
    }

}