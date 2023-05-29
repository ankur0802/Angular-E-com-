import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (private route:Router){

  }
  menuType:String = 'default';

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
     
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
        }else{
          this.menuType = 'default';
        }
      }
      

    })

  }
   

}
