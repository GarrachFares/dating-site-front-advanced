import { Component, OnInit } from '@angular/core';
import { UserI } from '../../Model/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  user: UserI = this.authService.getLoggedInUser();

  constructor(private authService: AuthService) { }
  

  ngOnInit(): void {
  }

}
