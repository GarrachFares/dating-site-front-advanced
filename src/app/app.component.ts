import { Component, Input } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  //show: boolean = this.authService.getDecodedToken()=== '{}'

  constructor(private authService : AuthService) { }
  

  
}
