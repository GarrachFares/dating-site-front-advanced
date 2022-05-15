import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  dropdownList : object[] = [];
  dropdownSettings:IDropdownSettings={};
  countries: any;



  public invalidLogin = false
  public errorMessage =''

  constructor(private http:HttpClient , private authService : AuthService) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.com/v3.1/all').subscribe(
      (response)=>{
        console.log(response);


        this.countries=response


      },

    )
    this.dropdownList = [
      { item_id: 1, item_text: 'sports' },
      { item_id: 2, item_text: 'cinema' },
      { item_id: 3, item_text: 'traveling' },
      { item_id: 4, item_text: 'gaming' },
      { item_id: 5, item_text: 'reading' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: true
    };
  }

  logger(form:NgForm){

    console.log(form);


  }
  register(form:NgForm){
    console.log(form);
    this.authService.register(form.value).subscribe(
      response => {
        if(response.message){
          this.errorMessage = response.message
          this.invalidLogin = true
          console.log(this.errorMessage)
        }else{
          console.log(response)
        }
      }
    )

  }

}
