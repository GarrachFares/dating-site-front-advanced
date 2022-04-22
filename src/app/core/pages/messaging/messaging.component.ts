import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  rooms = this.chatService.getMyRooms();
  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
    //this.chatService.createRoom();
  }

  createRoom(){
    this.chatService.createRoom();
  }
  

}
