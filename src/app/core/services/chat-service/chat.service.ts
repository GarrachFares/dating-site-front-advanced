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

  joinedRoom : RoomI | null = null ;
  constructor(private socket: Socket) { }

  setJoinedRoom(room:RoomI){
    this.joinedRoom = room ;
  }

  joinRoom(room:RoomI){
    this.socket.emit('joinRoom', room);
  }

  leaveRoom(room:RoomI){
    this.socket.emit('leaveRoom', room);
  }

  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', { limit, page });
  }

  emitPaginateMyRooms(limit: number, page: number) {
    this.socket.emit('paginateMatchedRooms', { limit, page });
  }

  sendMessage(message : MessageI) {
    //this.socket.emit('sendMessage',message)
    console.log(message)
    this.socket.emit('addMessage',message)
  }

  getMessages() : Observable<MessagePaginateI> {
    return this.socket.fromEvent<MessagePaginateI>('messages')
  }

  getMyRooms() {
    return this.socket.fromEvent<RoomPaginateI>('rooms');
  }

  getMyMatchedRooms() {
    return this.socket.fromEvent<RoomPaginateI>('matchedRooms');
  }

  getConnectedUsers() :Observable<UserI[]>  {
    return this.socket.fromEvent<UserI[]>('connectedUserAdded')
  }

  createRoom(room : RoomI){
    this.socket.emit('createRoom', room);
  }

  sendChoice(data : any){
    this.socket.emit('sendChoice', data);
  }

  getAddedMessage():Observable<MessageI>{
    return this.socket.fromEvent<MessageI>('messageAdded')
  } 

  getMyMatchedRoom() {
    return this.socket.fromEvent<RoomI>('matchedRoom');
  }



}
