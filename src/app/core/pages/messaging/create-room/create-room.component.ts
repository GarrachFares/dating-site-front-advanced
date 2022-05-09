import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../../services/chat-service/chat.service";
import {NgForm} from "@angular/forms";
import {RoomI} from "../../../Model/room.interface";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(private chatService : ChatService) { }

  ngOnInit(): void {
  }

  createRoom(roomform: NgForm) {
    const room: RoomI = roomform.form.getRawValue();
    room.users = []
    this.chatService.createRoom(room);
  }
}
