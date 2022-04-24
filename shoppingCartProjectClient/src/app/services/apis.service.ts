import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  
  private httpAuthHeader(withAuth = false) {
    if (withAuth) {
      const token: any = localStorage.getItem('access-token');
      const httpOptions: any = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        }),
      };
      return httpOptions;
    } else {
      return {};
    }
  }
  login(user: any) {
    this.httpClient
      .post(environment.userUrl + 'login', {
        email: user.email,
        password: user.password,
      },this.httpAuthHeader(true))
      .subscribe((result) => {
        console.log('test');
      });
  }
}
