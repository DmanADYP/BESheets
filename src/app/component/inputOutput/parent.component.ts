import { Component, Directive } from "@angular/core";

@Component({
selector:'parent',
template:`
<h1>parent:: Child value is {{childValue}} </h1>
<child (childchange)="childValue =$event"></child>
`

})

export class ParentComponent{
  
childValue:string;
}