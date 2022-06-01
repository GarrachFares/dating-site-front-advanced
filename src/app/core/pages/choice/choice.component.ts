import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatchingService} from "../../services/matching.service";
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';
import { RoomI } from '../../Model/room.interface';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnChanges{
  @Input() connectedUsers : UserI[] | null = [];
  @Input() room! :RoomI 
  constructor(private matchingService : MatchingService, private authService : AuthService) { }
  
  
  ngOnChanges() {
    const loggedInUser = this.authService.getLoggedInUser() ;
    if(this.connectedUsers) {
      this.people = this.connectedUsers.filter(user => user.sexe != loggedInUser.sexe ).map(user =>{
          if(user.username){
            return user.username;
          }else{
            return "hi"
          }
        })
    }
    console.log(this.connectedUsers)
  }

  // TODO : change this to people of opposite gender
  people = ['Sadak77','Salah76','Ali3','Skander2'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.people, event.previousIndex, event.currentIndex);
  }

  sendToServer() {
    //console.log(this.people ," aaaaaaaaaaaaaaaa " , this.room)
    if(this.room.id)
       this.matchingService.sendChoice(this.people,this.room.id);
  }
}
