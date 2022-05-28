import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-logo-nav',
  templateUrl: './logo-nav.component.html',
  styleUrls: ['./logo-nav.component.css']
})
export class LogoNavComponent implements OnInit {

  constructor(@Inject(HeaderComponent) private parent: HeaderComponent) { }

  ngOnInit(): void {
  }

  sendEvent(){
    this.parent.toggle_sidebar.emit(true);
  }
}
