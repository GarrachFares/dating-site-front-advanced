import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { RoomI, RoomPaginateI } from '../../Model/room.interface';
import { UserI } from '../../Model/user.interface';
import {MessageI, MessagePaginateI} from "../../Model/message.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }


  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', { limit, page });
  }

  sendMessage(message : MessageI) {
    this.socket.emit('sendMessage',message)
  }

  getMessages()  {
    this.socket.emit('getMessages');
    let messages: any[] = [];
    this.socket.on('messages',(data : any)=>messages.push(data))
    console.log("messages : ", typeof messages)
    return messages
  }

  getMyRooms() {
    return this.socket.fromEvent<RoomPaginateI>('rooms');
  }

  createRoom(room : RoomI){
    this.socket.emit('createRoom', room);
  }

}
