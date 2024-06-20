import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

//services
import { UsersService } from '../services/users.service';

type User = {
  isAdmin: boolean;
  email: string;
  password: string;
  nameUser: string;
  surnameUser: string;
  img: string;
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent {
  emailInput: string = '';
  passwordInput: string = '';
  isCorrect: boolean = false; //check if user inputs are correct
  userString: string = ''; // is used to save user logged in the session storage

  userFound: null | User = null;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public dataUser: UsersService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content);
  }

  // saves the input values that the user enters
  onChangeEmail(e: Event) {
    this.emailInput = (<HTMLInputElement>e.target).value;
  }

  onChangePassword(e: Event) {
    this.passwordInput = (<HTMLInputElement>e.target).value;
  }

  /**
   * checkUsers
   * 1) check if the user is registered
   * 2) if the user is actually registered, do a second check to understand if he is an admin or not
   * 3) if you are the admin you will be able to see the "add product" button
   * 4) if you are not admin you will not see the "add product" button
   *
   *
   */

  test: any = null;
  testResult: any = null;

  checkUsers() {
    //Reset userFound at null
    this.userFound = null;

    for (let user of this.dataUser.users) {
      if (
        user.email === this.emailInput &&
        user.password === this.passwordInput
      ) {
        this.userFound = user;
        break; //exit from loop if I find the user matching the inputs I enter
      }
    }

    //check if there is an User and the type of users (Admin or not Admin)
    if (!this.userFound) {
      this.isCorrect = false;
      alert('Non ti ho trovato tra gli utenti registrati');
    } else {
      this.isCorrect = true;

      if (this.userFound.isAdmin === true) {
        this.dataUser.isAdmin();
        this.userString = JSON.stringify(this.userFound);
        sessionStorage.setItem('userFound', this.userString);
        alert('ADMIN');
      } else {
        this.dataUser.isNotAdmin();
        this.userString = JSON.stringify(this.userFound);
        sessionStorage.setItem('userFound', this.userString);
        alert('Utente normale');
      }
    }
  }
}
