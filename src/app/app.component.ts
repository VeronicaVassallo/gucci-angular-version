import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private userData: UsersService) {}
  //method to check if there is an User logged
  userSession: string = '';
  user: User | null = null;
  checkSession() {
    try {
      //if the sessione is defined (differet from undefined) gets information from Session Storage
      if (typeof sessionStorage !== 'undefined') {
        const sessionData = sessionStorage.getItem('userFound');
        if (sessionData) {
          this.userSession = sessionData;
          this.user = JSON.parse(
            this.userSession
          ) as User; /*as User --> focus that this user is type User after
          the parse, this tipe is called deserialize, while from object to string is calles serialize*/
          if (this.user.isAdmin) {
            this.userData.isAdmin();
          } else {
            this.userData.isNotAdmin();
          }
          console.log('Utente loggato:', this.user);
        } else {
          this.userData.isNotAdmin();
          console.log('Utente NON loggato');
        }
      } else {
        //there isn't any information inside the session, 'couse no one user is logged
        console.log('sessionStorage non è disponibile.');
        this.userData.isNotAdmin();
      }
    } catch (error) {
      console.error(
        'Errore durante il recupero dei dati della sessione',
        error
      );
      this.userData.isNotAdmin();
    }
  }

  ngOnInit(): void {
    this.checkSession();
  }
  //TODO --> tp remove and import inside homePage.ts
  notScroll: boolean = true;
  onChildScroll(value: boolean): void {
    this.notScroll = value;
  }
}
