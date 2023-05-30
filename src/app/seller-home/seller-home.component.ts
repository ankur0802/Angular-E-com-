import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList: undefined | product[];
 
  constructor(private product:ProductService){}
  productMessage:string = '';

  ngOnInit():void{

    this.product.productList().subscribe((result)=>{
      console.log(result);
      this.productList =result;
      
    })

  }

}
