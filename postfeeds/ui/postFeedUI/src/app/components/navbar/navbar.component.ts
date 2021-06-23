import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  activeNav='home';
  constructor(private post:PostService) {
    
   }
   setActiveNav(menu:string):void{
    this.activeNav = menu;
   }
}
