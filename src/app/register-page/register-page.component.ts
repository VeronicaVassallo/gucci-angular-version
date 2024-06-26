import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent implements OnInit {
  dataFormProduct!: FormGroup;
  listUsers: User[] = [];
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.listUsers = this.userService.getUsers();
    this.dataFormProduct = new FormGroup({
      nameUser: new FormControl(null, Validators.required),
      surnameUser: new FormControl(null, Validators.required),
      img: new FormControl(''),
      adress: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmitaddProduct() {
    if (this.dataFormProduct.valid) {
      const newUser: User = this.dataFormProduct.value as User;
      this.listUsers.push(newUser);
      alert('Registrazione Avvenuta con successo!!');
      this.router.navigate([`profile/${newUser.email}`]);
    } else {
      console.log('Errore durante la fase di Registrazione');
    }
  }
}
