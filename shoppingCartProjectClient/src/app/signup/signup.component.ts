import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private usersApi: UsersService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.usersApi.isLoggedIn());
     
  }
  signup(data: NgForm) {
    this.usersApi.signup(data.value).subscribe(
      (response: any) => {
        if (response.msg == 'ok') {
          this.router.navigate(['/login']);
          return true;
        } else {
          data.form.setErrors({ error: response.info });  
          console.log(response.info);
          return false;
        }
      },
      (error) => {
        console.log(error);
        return false;
      }
    );
  }
}
