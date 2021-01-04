import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  private toastrConfig: {} = {
    disableTimeOut: false,
    closeButton: false,
    positionClass: 'toast-top-right'
  };

  constructor(private toastr: ToastrService) {}

  public successMessage(message: string): void {
    // this.messages.push(message);
    this.toastr.success(message, 'Message:', this.toastrConfig);
  }

  public errorMessage(message: string): void {
    this.toastr.error(message, 'Message:', this.toastrConfig);
  }

  public warningMessage(message: string): void {
    this.toastr.warning(message, 'Message:', this.toastrConfig);
  }

  public infoMessage(message: string): void {
    this.toastr.info(message, 'Message:', this.toastrConfig);
  }

  public clear(): void {
    this.messages = [];
  }
}
