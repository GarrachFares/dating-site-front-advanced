import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import {RoomI} from "../../../Model/room.interface";
import {ChatService} from "../../../services/chat-service/chat.service";
import {MessageI, MessagePaginateI} from "../../../Model/message.interface";
import {AuthService} from "../../../services/auth.service";
import {UserI} from "../../../Model/user.interface";


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnChanges, OnDestroy, AfterViewInit {

  chatMessage: FormControl = new FormControl(null, [Validators.required]);
  messages$  = this.chatService.getMessages();
  messages: any;
  me : UserI = this.authService.getLoggedInUser() ;

  constructor(private chatService: ChatService, private  authService :  AuthService) {}

  ngOnInit(): void {
    //console.log("messages "+ this.messages$)

    console.log(this.messages$)

  }

  ngOnDestroy(): void {
  }

  sendMessage(sendForm: NgForm) {
    const message : MessageI = sendForm.form.getRawValue()
    this.chatService.sendMessage(message);
    sendForm.controls['message'].reset();
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.messages$ =  this.chatService.getMessages();
    //console.log(typeof this.messages$.pop())
  }
}
