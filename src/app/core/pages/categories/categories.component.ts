import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';


class category {
  id!: number;
  name!: string;
  isselected!:boolean;
  icon!:string
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  previousCats! : category[] ;
  categories!: category[];
  mycategories!:number[];
  user: UserI = this.authService.getLoggedInUser();
  public errorMessage = '';
  get_categories(){
    this.categories=[
      {id:1,name:"football",isselected:false,icon:"fa-football"},
      {id:2,name:"basketball",isselected:false,icon:"fa-basketball"},
      {id:3,name:"theater",isselected:false,icon:"fa-masks-theater"},
      {id:4,name:"cinema",isselected:false,icon:"fa-film"},
      {id:5,name:"gaming",isselected:false,icon:"fa-gamepad"},
      {id:6,name:"reading",isselected:false,icon:"fa-book"},
      {id:7,name:"music",isselected:false,icon:"fa-music"},
      {id:8,name:"math",isselected:false,icon:"fa-calculator"},
      {id:9,name:"programing",isselected:false,icon:"fa-computer"},
      {id:10,name:"physics",isselected:false,icon:"fa-atom"},
      {id:11,name:"politics",isselected:false,icon:"fa-landmark"},
      {id:12,name:"love",isselected:false,icon:"fa-heart"},
      {id:13,name:"meeting",isselected:false,icon:"fa-handshake"},
      {id:14,name:"food",isselected:false,icon:"fa-bowl-food"},
      {id:15,name:"buisness",isselected:false,icon:"fa-money-bill-trend-up"},
      {id:16,name:"health",isselected:false,icon:"fa-briefcase-medical"}
    ]
  }


  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user)
    this.get_categories();
    this.authService.getCategories().subscribe((response) => {
      if (response.message) {
        this.errorMessage = response.message;
        console.log(this.errorMessage);
        this.previousCats = [];
      } else {
        this.previousCats = response;
        this.categories = this.categories.map( cat=> { 
          if(this.previousCats.find(previousCat=>previousCat.id==cat.id)){
            cat.isselected=true;
          return cat 
        }else {
          
          return cat 
        }});
      }
    });;
  }

  onchange(){
    console.log(this.categories);
    
  }

  sendcat(form:NgForm){
    this.mycategories=this.categories.filter(cat=>cat.isselected==true).map(cat=>cat.id)
    console.log(form);
    console.log("these are my choices: "+ this.mycategories);
    
    this.authService.addCategories(this.mycategories
      ).subscribe((response) => {
      if (response.message) {
        this.errorMessage = response.message;
        console.log(this.errorMessage);
      } else {
       
        console.log("it worked ... i guess",response);
        this.router.navigate(['/explore']);
       
       
      }
    });;

    
    
  }

}
