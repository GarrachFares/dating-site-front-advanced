import { Component, OnInit } from '@angular/core';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

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
  selectedFile!: ImageSnippet;

  constructor(private authService: AuthService, private router: Router,private imageService: ImageService) {}

  ngOnInit(): void {
    console.log("AAAAAAAAAAA");
    console.log(this.user.image);
    
    
    
  }

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

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

          console.log("AAAAAAAAAA");
          res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
          
          window.location.reload()
          
          //this.imageService.getImage(res.filename)

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }
}
