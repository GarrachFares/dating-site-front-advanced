import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  sidebar:boolean = false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  processReq(status:boolean){
    if(this.sidebar==status){
      this.sidebar = !this.sidebar
    }
    else{
      this.sidebar=status;
    }
    

  }

}
