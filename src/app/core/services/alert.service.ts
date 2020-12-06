import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {IndividualConfig} from "ngx-toastr/toastr/toastr-config";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  iconClasses = {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning',
  };

  constructor(private toastr: ToastrService) {
  }

  successMessage(message: string, title: string, config?: Partial<IndividualConfig>) {
    this.toastr.success(message, title, config);
  }

  errorMessage(message: string, title: string, config?: Partial<IndividualConfig>) {
    this.toastr.error(message, title, config);
  }

}
