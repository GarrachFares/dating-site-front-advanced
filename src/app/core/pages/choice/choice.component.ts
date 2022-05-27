import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent  {
  people = ['Sadak77','Salah76','Ali3','Skander2'];


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.people, event.previousIndex, event.currentIndex);
  }
}
