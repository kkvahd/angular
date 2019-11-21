import { Component } from '@angular/core';
import {AuthenticationServiceService} from './authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isloggedIn: boolean;
  constructor(private authService: AuthenticationServiceService){
  }
  title = 'routingApp';
}
