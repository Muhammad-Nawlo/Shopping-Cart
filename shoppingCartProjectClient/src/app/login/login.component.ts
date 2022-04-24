import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
  login() {
    this.usersService.login(this.form.value).subscribe(
      (response: any) => {
        if (response.msg == 'ok') {
          localStorage.setItem('accessToken',response.accessToken);
          this.router.navigate(['/']);
          return true;
        } else {
          this.form.setErrors({ error: response.info });
          return false;
        }
      },
      (error) => {
        console.log(error);
        return false;
      }
    );
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }
}
