import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  constructor(private product:ProductService){}
  addProductMessage: string | undefined;

  submit(data:product){
    
    this.product.addProduct(data).subscribe((result)=>{
      // console.log(result);
      if(result){
        this.addProductMessage = 'Product is added successfully';
      }
    })
    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);

  }

}
