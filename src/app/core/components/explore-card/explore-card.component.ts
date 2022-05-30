import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomI } from '../../Model/room.interface';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.css']
})
export class ExploreCardComponent implements OnInit {

  @Input() name! : string ;
  @Input() description! : string ;
  @Input() room! : RoomI ;
  
  constructor(private router:Router,private chatService:ChatService) { }

  ngOnInit(): void {
    console.log(this.room) }

  joinRoom(){
      this.chatService.setJoinedRoom(this.room)
      this.router.navigate(['/room']);
  }

}
