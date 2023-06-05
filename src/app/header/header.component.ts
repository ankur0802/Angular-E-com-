import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (private route:Router , private product:ProductService){

  }
  menuType:string = 'default';
  sellerName:string = '';
  searchResult :undefined | product[]

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
     
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerInfo = localStorage.getItem('seller');
            let sellerData = sellerInfo && JSON.parse(sellerInfo);
            this.sellerName = sellerData.name
          }
        }else{
          this.menuType = 'default';
        }
      }
    })
  }
  
  search(query:KeyboardEvent){

    if(query){
      let element = query.target as HTMLInputElement
      this.product.searchproducts(element.value).subscribe((result)=>{
        this.searchResult = result;
        
      })
    }
  }

  hidesearch(){
    this.searchResult = undefined;
  }

  submitSearch(val:string){
     this.route.navigate([`search/${val}`])
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

}
