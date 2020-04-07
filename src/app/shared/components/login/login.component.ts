import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.auth.login(this.email, this.password)
      .then(res => {
        this.router.navigate(['/']);
      })
        .catch(err => {
          return alert(err.message);
      });
  }
}
