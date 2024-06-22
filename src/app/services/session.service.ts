import { Injectable } from '@angular/core';
import { User, UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private userService: UsersService) {}

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
            this.userService.setAdminTrue();
          } else {
            this.userService.setAdminFalse();
          }
          console.log('Utente loggato:', this.user);
        } else {
          this.userService.setAdminFalse();
          console.log('Utente NON loggato');
        }
      } else {
        //there isn't any information inside the session, 'couse no one user is logged
        console.log('sessionStorage non è disponibile.');
        this.userService.setAdminFalse();
      }
    } catch (error) {
      console.error(
        'Errore durante il recupero dei dati della sessione',
        error
      );
      this.userService.setAdminFalse();
    }
  }
}
