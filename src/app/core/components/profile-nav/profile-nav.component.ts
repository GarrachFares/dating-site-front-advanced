import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent implements OnInit {
  @Input() user: any;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }
}
