import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  sidebar:boolean = false;

  constructor(private chatService:ChatService) { }
  //title=this.chatService.getMessage();



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
