import { Component, OnInit } from '@angular/core';
import { PostsService } from "routing/post.service";
//import { Report1 } from "app/model/report1.model";
import { Observable } from "rxjs/Observable";
//import { User } from "app/model/User.Model"
import { routing } from "routing/routing.service";


@Component({
    
    selector: 'nav-bar',
   // moduleId: module.id,
    templateUrl:`./navbar.component.html` ,
  "styles": ["styles.css"],
})
export class NavBarComponent implements OnInit{
  ngOnInit(): void {
    
  }
 


       
}