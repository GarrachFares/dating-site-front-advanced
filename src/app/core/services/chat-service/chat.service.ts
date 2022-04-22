import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage() {
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }

  getMyRooms() {
    return this.socket.fromEvent<any>('rooms'); // fix type later
  }

  createRoom(){
    const user2 = {
      id: "bf7466ee-9aa7-4c5e-b7d7-1f619dcd2f0a"
    }
    const room = {
      name: 'testRoom',
      users: [user2]
    }
    this.socket.emit('createRoom', room);
  }
}
