import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  @Output() toggle_sidebar = new EventEmitter();
  user: UserI = this.authService.getLoggedInUser();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  
  sendEvent(){
    
    this.toggle_sidebar.emit(true);
  }

}
