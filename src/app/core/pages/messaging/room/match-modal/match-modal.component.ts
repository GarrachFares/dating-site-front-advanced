import { Component, Input, OnInit } from '@angular/core';
import { RoomI } from 'src/app/core/Model/room.interface';
import { UserI } from 'src/app/core/Model/user.interface';

@Component({
  selector: 'app-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.css']
})
export class MatchModalComponent implements OnInit {
  @Input() connectedUsers:UserI[] | null = [] ;
  @Input() room!: RoomI;
  constructor() { }

  ngOnInit(): void {
  }

}
