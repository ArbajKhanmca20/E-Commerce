import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private userService: UserService) {}
  isSubmitted: boolean = false;
  ngOnInit(): void {}
  loginuser(loginForm: NgForm) {
    this.isSubmitted = true;
    if (loginForm.invalid) {
      return;
    }
    console.log(loginForm.value);
    this.userService.onLogin(loginForm.value);
  }
}
