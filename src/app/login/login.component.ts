import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
         console.log(res),
         console.log(res.token),
        localStorage.setItem('token', res.token),
        localStorage.setItem('id', res.id),
        localStorage.setItem('role', res.role)
        this._router.navigate(['/'])
      },
      err => console.log(err)
    ) 
  }

}
