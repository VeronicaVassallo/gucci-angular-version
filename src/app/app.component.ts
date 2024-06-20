import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private userData: UsersService) {}
  //method to check if there is an User logged
  userSession: string = '';
  user: any;
  checkSession() {
    if (sessionStorage.getItem('userFound')) {
      this.userSession = sessionStorage.getItem('userFound')!;
      this.user = JSON.parse(this.userSession);
      if (this.user.isAdmin === true) {
        this.userData.isAdmin();
      } else {
        this.userData.isNotAdmin();
      }
      console.log('utente loggato');
    } else {
      this.userData.isNotAdmin();
      console.log('Untente NON loggato');
    }
  }

  ngOnInit(): void {
    this.checkSession();
  }
  notScroll: boolean = true;
  onChildScroll(value: boolean): void {
    this.notScroll = value;
  }
}
