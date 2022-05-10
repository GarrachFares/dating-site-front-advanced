import { Component, OnInit } from '@angular/core';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  user: UserI = this.authService.getLoggedInUser();
  public errorMessage =''
  edited:boolean=false;

  constructor(private authService: AuthService,private router:Router) { }
  

  ngOnInit(): void {
  }

  editProfil(editform:NgForm){
    console.log(editform);
    this.authService.editProfil(editform.value).subscribe(
      response => {
        if(response.message){
          this.errorMessage = response.message
          console.log(this.errorMessage)
        }else{
          console.log(response)
        }
      }
    )
    this.edited = true;
    
  }
  

}
