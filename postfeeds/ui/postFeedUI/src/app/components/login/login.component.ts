import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username ='';
  public password:any;
  public error ='';

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        (result:any) => this.router.navigate(['posts']),
        (err:any) => this.error = 'Could not authenticate'
      );
  }
}
