import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import { UserService } from '../../services/auth/user.service';
import { AlertService } from '../../services/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpUserForm: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.signUpUserForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
    this.signUpUserForm.controls['email'].setValue('email@test.com')
    this.signUpUserForm.controls['password'].setValue('password')

  }


  onSubmitSignUpForm() {
    const {email, password} = this.signUpUserForm.getRawValue();
    this.userService.singUpWithEmailAndPassword(email, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe( _ => {
        this.alertService.successMessage('Successfully registered', 'Register', {timeOut: 1000})
        return this.router.navigate(['/auth/login']);
      }, error => {
        const errorMessage = this.userService.getErrorSignUpMessage(error.code);
        this.alertService.errorMessage(errorMessage, 'Error', {timeOut: 1000})

      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
