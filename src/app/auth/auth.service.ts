import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor (
    private router: Router) {}

  signupUser(email: string, password: string) {

  }

  // signinUser(email: string, password: string) {
  //   const body = JSON.stringify({
  //     username: email,
  //     password: password
  //   });
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post('http://localhost:3000/authenticate', body, {
  //     headers: headers
  //   })
  //     .map((response: Response) => response.json())
  //     .subscribe(
  //       (data: any) => {
  //         console.log(data);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  // }

  logout() {

  }

  getToken() {

  }

  isAuthenticated() {
    return this.token != null;
  }
}
