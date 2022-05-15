import { Component, OnInit } from '@angular/core';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  user: UserI = this.authService.getLoggedInUser();
  public errorMessage = '';
  edited: boolean = false;
  passerror: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  editProfil(editform: NgForm) {
    console.log(editform.value.username);

    console.log(editform);
    this.authService.editProfil(editform.value).subscribe((response) => {
      if (response.message) {
        this.errorMessage = response.message;
        console.log(this.errorMessage);
      } else {
        console.log(response);
        window.location.reload()
        this.edited = true;

      }
    });
  }

  changepassword(passwordform: NgForm){

    console.log(passwordform.value);
    console.log(this.user.password);
    
    if(passwordform.value.newpassword!=passwordform.value.renewpassword){
      this.passerror=true

    }
    this.authService.changepassword(passwordform.value).subscribe((response) => {
      if (response.message) {
        this.errorMessage = response.message;
        console.log(this.errorMessage);
      } else {
        window.location.reload()
        console.log(response);
       
       
      }
    });
    
  }
}
