import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { RoomPaginateI } from '../../Model/room.interface';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-matched-messaging',
  templateUrl: './matched-messaging.component.html',
  styleUrls: ['./matched-messaging.component.css']
})
export class MatchedMessagingComponent implements OnInit {

  rooms$: Observable<RoomPaginateI> = this.chatService.getMyMatchedRooms();
  selectedRoom = null;
  user: UserI = this.authService.getLoggedInUser();

  constructor(private chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
    this.chatService.emitPaginateMyRooms(10, 0);
  }

  ngAfterViewInit() {
    this.chatService.emitPaginateMyRooms(10, 0);
  }

  onSelectRoom(event: MatSelectionListChange ) {
    this.selectedRoom = event.source.selectedOptions.selected[0].value;
  }

  onPaginateRooms(pageEvent: PageEvent) {
    this.chatService.emitPaginateMyRooms(pageEvent.pageSize, pageEvent.pageIndex);
  }


 /* createRoom(){
    this.chatService.createRoom(roo);
    console.log(this.rooms$);

  }*/


}