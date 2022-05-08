import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { RoomI, RoomPaginateI } from '../../Model/room.interface';
import { UserI } from '../../Model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  
  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', { limit, page });
  }

  sendMessage() {
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }

  getMyRooms() {
    return this.socket.fromEvent<RoomPaginateI>('rooms'); 
  }

  createRoom(){
    // const user2:UserI = {
    //   id: 1
    // }
    const room:RoomI = {
      name: 'testRoom1',
      users: []
    }
    this.socket.emit('createRoom', room);
  }
}
