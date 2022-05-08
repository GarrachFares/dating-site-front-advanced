import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  @Output() toggle_sidebar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  sendEvent(){
    
    this.toggle_sidebar.emit(true);
  }

}
