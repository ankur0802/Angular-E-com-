import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private router:Router){}
  
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  showlogin = false;

  signUp(data:SignUp):void{
    this.seller.sellerSignUp(data)
  }
  buttonToggle(){
    this.showlogin = !this.showlogin

  }
  login(data:login):void{
    // this.seller.sellerLogin(data)

  }



}
