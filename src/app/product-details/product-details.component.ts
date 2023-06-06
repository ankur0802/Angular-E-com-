import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productdetail: undefined | product;
  productQuantity: number = 1;
  removeCart: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('productId');

    productId &&
      this.product.getproduct(productId).subscribe((result) => {
        this.productdetail = result;
      });

    let cartData = localStorage.getItem('localCart');
    if (productId && cartData) {
      let items = JSON.parse(cartData);
      items = items.filter((item: product) => productId == item.id);
      if (items.length) {
        this.removeCart = true;
      } else {
        this.removeCart = false;
      }
    }
  }
  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val == 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val == 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productdetail) {
      this.productdetail.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.product.localAddToCart(this.productdetail);
        this.removeCart = true;
      }
    }
  }

  removeToCart(id: string) {
    this.product.removeItemromCart(id);
    this.removeCart = false;
  }
}
