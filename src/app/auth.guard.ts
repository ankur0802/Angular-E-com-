import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { CookieService } from 'ngx-cookie-service';


export const authGuard: CanActivateFn = (route, state) => {
  
const service = inject(SellerService)  
//   if(localStorage.getItem('seller')){
//    return true
//  }
 if(service.cookie.get('token')){
  return true
 }


  return service.isSellerLoggedIn;
};
