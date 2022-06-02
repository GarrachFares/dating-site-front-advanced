import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { RoomI } from '../../../Model/room.interface';
import { ChatService } from '../../../services/chat-service/chat.service';
import { MessageI, MessagePaginateI } from '../../../Model/message.interface';
import { AuthService } from '../../../services/auth.service';
import { UserI } from '../../../Model/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnChanges, OnDestroy, AfterViewInit {
  //me : UserI = this.authService.getLoggedInUser() ;
  notifActive = false
  notifMsg = "You have matched with someone ! go to your rooms to find out with whom you've been matched!"
  chatRoom: RoomI = {
    // id:1111,
    // name:"yooo",
    // users:[this.me],
  };
  chatMessage: FormControl = new FormControl(null, [Validators.required]);
  //messages$ : Observable<MessagePaginateI>  = this.chatService.getMessages();
  connectedUsers$: Observable<UserI[]> = this.chatService.getConnectedUsers();

  messages$: Observable<MessagePaginateI> = combineLatest([
    this.chatService.getMessages(),
    this.chatService.getAddedMessage().pipe(startWith(null)),
  ]).pipe(
    map(([messagePaginate, message]) => {
      if (message && message.room.id == this.chatRoom.id) {
        messagePaginate.items.push(message);
      }
      //const items= messagePaginate.items.sort((a:any,b:any)=> a.created_at?.getTime() - b.created_at?.getTime());
      //messagePaginate.items = items;
      return messagePaginate;
    })
  );

  messages: any;

  constructor(
    private router: Router,
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.notifActive = false
    if (this.chatService.joinedRoom) {
      this.chatRoom = this.chatService.joinedRoom;
    } else {
      //navigate to /explore
      this.chatService.leaveRoom(this.chatRoom);
      this.router.navigate(['/explore']);
      return;
      //console.log("no room")
    }
    this.chatService.joinRoom(this.chatRoom);
    // this.messages$.subscribe(data => {
    //   console.log(data.items)
    // })

    this.chatService.getMyMatchedRoom().subscribe((data) => {
      // window.alert(
      //   "you matched ! go to your rooms to find out with whom you've been matched!"
      // );

      if (data) {
        console.log(data);
        this.notifActive = true

        const loggedUser = this.authService.getLoggedInUser();


        let matchedUserName = "someone"
        if(data.users){

           const userNameA = data.users.filter(user => user.username !== loggedUser.username);
           if(userNameA[0].username)
            matchedUserName = userNameA[0].username;
        }
        
        this.notifMsg = "You have matched with "+ matchedUserName + " ! check " + data.name + " in my rooms tab !";

        //dont touch this pls :'(
        this.chatService.setJoinedRoom(data);
        this.router.navigate(['/explore/room']); 
      }
    });
  }

  ngOnDestroy(): void {
    this.chatService.leaveRoom(this.chatRoom);
    console.log('leave');
  }

  sendMessage(sendForm: NgForm) {
    // const message : MessageI = sendForm.form.getRawValue()
    this.chatService.sendMessage({
      message: sendForm.value.message,
      room: this.chatRoom,
    });
    //console.log(sendForm.value)
    sendForm.controls['message'].reset();
  }

  ngAfterViewInit(): void {}
  closeNotif() {
    this.notifActive = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.messages$ =  this.chatService.getMessages();
    //console.log(typeof this.messages$.pop())
    // console.log(this.chatRoom)
    // console.log(this.messages$)
    // if(this.chatRoom){
    //   this.chatService.joinRoom(this.chatRoom);
    // }
  }
}
