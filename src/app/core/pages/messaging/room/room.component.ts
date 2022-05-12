import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import {RoomI} from "../../../Model/room.interface";
import {ChatService} from "../../../services/chat-service/chat.service";
import {MessageI, MessagePaginateI} from "../../../Model/message.interface";


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnChanges, OnDestroy, AfterViewInit {


  //messages$: Observable<MessagePaginateI> = this.chatService.getMessages()
  /*.pipe(
    map((messagePaginate: MessagePaginateI) => {
      const items = messagePaginate.messages.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      messagePaginate.messages = items;
      return messagePaginate;
    })
  );*/
  chatMessage: FormControl = new FormControl(null, [Validators.required]);
  /*previousMessages = [{user : "farouk" ,message :"hello",
  },
    {user : "skander" ,message :"waaaa"},{user : "farouk" ,message :"hello"}
                      ];*/
  messages$  = this.chatService.getMessages();

  messages: any;


  constructor(private chatService: ChatService) {}

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
