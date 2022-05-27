import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatchingService} from "../../services/matching.service";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent  {
  constructor(private matchingService : MatchingService) {
  }

  // TODO : change this to people of opposite gender
  people = ['Sadak77','Salah76','Ali3','Skander2'];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.people, event.previousIndex, event.currentIndex);
  }

  sendToServer() {
    console.log(this.people)
    this.matchingService.sendChoice(this.people);
  }
}
