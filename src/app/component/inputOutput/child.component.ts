import { Output, Component, EventEmitter } from "@angular/core";

@Component({
    selector:'child',
    template:` 
    <h1>Child</h1>
    <input type="text" #childInput (keyup)=onChange(childInput.value)>
    `
})export class ChildComponent{
    @Output()childchange = new EventEmitter<string>()

    onChange(value:string){
            this.childchange.emit(value);
    }
}