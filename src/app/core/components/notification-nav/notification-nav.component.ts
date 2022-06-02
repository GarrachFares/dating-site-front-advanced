import { Component, OnInit } from '@angular/core';
import { RoomI } from '../../Model/room.interface';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat-service/chat.service';

@Component({
  selector: 'app-notification-nav',
  templateUrl: './notification-nav.component.html',
  styleUrls: ['./notification-nav.component.css']
})
export class NotificationNavComponent implements OnInit {

  constructor( private chatService : ChatService , private authService: AuthService) { }
  matches :string[] = []
  ngOnInit(): void {
    this.chatService.getMyMatchedRoom().subscribe((data) => {
      if (data) {
        console.log(data);
        const loggedUser = this.authService.getLoggedInUser();


        let matchedUserName = "someone"
        if(data.users){

           const userNameA = data.users.filter(user => user.username !== loggedUser.username);
           if(userNameA[0].username)
            matchedUserName = userNameA[0].username;
        }
        
        const msg = "You have matched with "+ matchedUserName + " ! check " + data.name + " in my rooms tab";
        if(!this.matches.includes(msg))
          this.matches.push(msg);
        //this.chatService.setJoinedRoom(data);
      }
    });
  }

  

}
