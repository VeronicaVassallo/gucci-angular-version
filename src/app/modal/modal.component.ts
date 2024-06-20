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

  // mi salva  i valori dell'inpunt che immette l'utente
  onChangeEmail(e: Event) {
    this.emailInput = (<HTMLInputElement>e.target).value;
  }

  onChangePassword(e: Event) {
    this.passwordInput = (<HTMLInputElement>e.target).value;
  }

  /**
   * checkUsers
   * 1) controllare se 'utente risulta tra i registrati
   * 2) se l'utente è effetivsmente registrato fare un secondo controllo per capire se è un admin o meno
   * 3) se è l'admin potra vedere il bottone "aggiungi prodotto"
   * 4) se non è admin non vedra nulla
   *
   * nice to have: salvare i dati dell'utente loggato nel local storage
   */
  checkUsers() {
    //Reset userFound cosi che il dato di partenza sia sempre null
    this.userFound = null;

    for (let user of this.dataUser.users) {
      if (
        user.email === this.emailInput &&
        user.password === this.passwordInput
      ) {
        this.userFound = user;
        break; //Esco dal ciclo se trovo l'utente corrispondente agli input che immetto
      }
    }

    //verifica il tipo di utente e se c'è un utente
    if (!this.userFound) {
      this.isCorrect = false;
      alert('Non ti ho trovato tra gli utenti registrati');
    } else {
      this.isCorrect = true;

      if (this.userFound.isAdmin === true) {
        this.dataUser.isAdmin();
        alert('ADMIN');
      } else {
        this.dataUser.isNotAdmin();
        alert('Utente normale');
      }
    }
  }
}
