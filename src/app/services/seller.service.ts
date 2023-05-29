import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})

export class SellerService {
  constructor(private http: HttpClient, private router:Router, private cookieService: CookieService) {}

  isSellerLoggedIn = new BehaviorSubject <boolean> (false)

  cookie = this.cookieService;
  


  sellerSignUp(data: SignUp) {
     this.http.post('http://localhost:3000/seller',
     data,
      {
      observe: 'response',
    }
    ).subscribe((result)=>{

      localStorage.setItem('seller', JSON.stringify(result.body))

      this.isSellerLoggedIn.next(true)
      const loc = window.location;
      if (loc.hostname === 'localhost' || loc.hostname === 'localhost') {
         this.cookieService.set('token', 'abc' );
      } else {
         this.cookieService.set('token', 'aaa');
      }
      if(result){
        this.router.navigate(['/seller-home'])
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }


  // sellerLogin(data:login){

  //   this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`)
  
  //   this.http.post('http://localhost:3000/seller',
  //   data,
  //    {
  //    observe: 'response',
  //  }
  //  ).subscribe((result)=>{

  //    localStorage.setItem('seller', JSON.stringify(result.body))

  //    this.isSellerLoggedIn.next(true)
  //    if(result){
  //      this.router.navigate(['/seller-home'])
  //    }
  //  })
    

  // }


}
