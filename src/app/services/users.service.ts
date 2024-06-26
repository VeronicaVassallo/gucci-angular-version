import { Injectable } from '@angular/core';

import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      isAdmin: true,
      email: 'gucci@gucci.com',
      password: 'gucci',
      nameUser: 'Amministratore',
      surnameUser: 'Gucci',
      img: 'https://i.pinimg.com/736x/3b/bb/e2/3bbbe2fe4c6c20f540ba654c8af4d625.jpg',
      adress: '',
    },
    {
      isAdmin: false,
      email: 'mario@rossi.com',
      password: 'rossi',
      nameUser: 'Mario',
      surnameUser: 'Rossi',
      img: 'https://ecard.iphyto.com/assets/img/profile-img.jpg',
      adress: 'via Roma 8, Milano',
    },
  ];
  constructor() {}

  isAdminLogged: boolean = false;

  setAdminFalse() {
    this.isAdminLogged = false;
  }
  setAdminTrue() {
    this.isAdminLogged = true;
  }

  getAdminValue() {
    return this.isAdminLogged;
  }

  getUsers() {
    return this.users;
  }

  getSpecificUser(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}
