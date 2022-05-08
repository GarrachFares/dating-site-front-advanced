import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { RoomPaginateI } from '../../Model/room.interface';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  rooms$: Observable<RoomPaginateI> = this.chatService.getMyRooms();
  selectedRoom = null;
  user: UserI = this.authService.getLoggedInUser();

  constructor(private chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
    this.chatService.emitPaginateRooms(10, 0);
  }

  ngAfterViewInit() {
    this.chatService.emitPaginateRooms(10, 0);
  }

  onSelectRoom(event: MatSelectionListChange ) {
    this.selectedRoom = event.source.selectedOptions.selected[0].value;
  }

  onPaginateRooms(pageEvent: PageEvent) {
    this.chatService.emitPaginateRooms(pageEvent.pageSize, pageEvent.pageIndex);
  }


  createRoom(){
    this.chatService.createRoom();
    console.log(this.rooms$);

  }


}
