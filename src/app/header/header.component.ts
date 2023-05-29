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
  menuType:string = 'default';
  sellerName:string = '';

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
     
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerInfo = localStorage.getItem('seller');
            let sellerData = sellerInfo && JSON.parse(sellerInfo)
            this.sellerName = sellerData.name
          }
        }else{
          this.menuType = 'default';
        }
      }
    })
  }
   
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

}
