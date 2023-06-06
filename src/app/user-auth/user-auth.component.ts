import { Component } from '@angular/core';
import { login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showlogin:boolean = false;
  authError:string = "";

  constructor(private user:UserService){}

  ngOnInit():void{
    this.user.userAuthreload()
  }

  signUp(data:SignUp){
    this.user.userSignup(data)    
  }

  login(data:login){
    this.user.userLogin(data)
    this.user.invaliduserAuth.subscribe((result)=>{
       if(result){
        this.authError = "Email And Password not match"
      }
      
    })

  }




  buttonToggle(){
    this.showlogin = !this.showlogin

  }


}
