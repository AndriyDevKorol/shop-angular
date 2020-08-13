import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
// import {UserService} from "./../../../core/services/user.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
// import {AlertService} from "./../../../core/services/alert.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpUserForm: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    // private userService: UserService,
    // private alertService: AlertService
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


  // onSubmitSignUpForm() {
  //   const {email, password} = this.signUpUserForm.getRawValue();
  //   this.userService.signUpWithEmailAndPassword(email, password)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(userCredential => {
  //       this.alertService.successMessage('Successfully registered', 'Register', {timeOut: 1000})

  //     }, error => {
  //       const errorMessage = this.userService.getErrorSignUpMessage(error.code);
  //       this.alertService.errorMessage(errorMessage, 'Error', {timeOut: 1000})

  //     })
  // }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
