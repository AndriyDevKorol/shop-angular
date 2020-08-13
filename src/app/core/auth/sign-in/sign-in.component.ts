import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {UserService} from "../../services/auth/user.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import { AlertService } from '../../services/alert.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  signInUserForm: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.signInUserForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmitSignInForm() {
    console.log('login');
    const {email, password} = this.signInUserForm.getRawValue();
    this.userService.signInWithEmailAndPassword(email, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe(_ => {
        this.alertService.successMessage('Successfully ', 'Login Success', {timeOut: 1000})
        console.log('login-success');
        return this.router.navigate(['/']);
      }, error => {
        console.log('login-error');
        const errorMessage = this.userService.getErrorSignInMessage(error.code);
        this.alertService.errorMessage(errorMessage, 'User Not Found', {timeOut: 1000})
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
