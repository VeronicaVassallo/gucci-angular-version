import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/users.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  emailUser!: string | null;
  userLogged!: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}
  ngOnInit(): void {
    this.emailUser = this.route.snapshot.paramMap.get('email');
    if (this.emailUser) {
      this.userLogged = this.userService.getSpecificUser(this.emailUser);
      if (this.userLogged) {
        console.log('Il profilo di ', this.userLogged);
      } else {
        console.log('Utente non trovato');
      }
    } else {
      console.log('Email non fornita nella rotta');
    }
  }
}
