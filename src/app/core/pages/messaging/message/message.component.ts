import {Component, Input, OnInit} from '@angular/core';
import {MessageI} from "../../../Model/message.interface";
import {UserI} from "../../../Model/user.interface";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message! : MessageI  ;
  user : UserI = this.authService.getLoggedInUser()

  constructor(private authService  :AuthService) { }

  ngOnInit(): void {
  }

  showdate(created_at:any){

    const date =JSON.stringify(created_at);
    return date.substring(12,17)

  }

}
