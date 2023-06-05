import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productdetail: undefined | product;

  constructor(private activatedRoute:ActivatedRoute, private product:ProductService){
  }

  ngOnInit():void{
    const productId = this.activatedRoute.snapshot.paramMap.get('productId')

    productId && this.product.getproduct(productId).subscribe((result)=>{
      this.productdetail = result;
      
    })
    

  }



}
