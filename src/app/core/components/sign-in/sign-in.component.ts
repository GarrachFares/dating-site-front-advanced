import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public invalidLogin = false 
  public errorMessage =''
  
  constructor(private authService : AuthService) { }
  
  ngOnInit(): void {
  }

  login(form:NgForm){
    console.log(form);
    this.authService.login(form.value).subscribe(
      response => {
        if(response.message){
          this.errorMessage = response.message.message
          this.invalidLogin = true
        }else{
          console.log(response)
        }
      }
      )
    

  }
  

}
