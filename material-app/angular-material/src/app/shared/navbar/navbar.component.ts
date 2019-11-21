import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  goToGoogle(){
    window.location.href = "https://www.google.com";
  }

  ngOnInit() {
  }

}
