import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { ToastEvent, Event } from '../../models/toast.types';

@Component({
  selector: 'app-btn-container',
  templateUrl: './btn-container.component.html',
  styleUrls: ['./btn-container.component.scss'],
})
export class BtnContainerComponent {
  EVENT = Event;

  successData: ToastEvent = {
    type: Event.SUCCESS,
    buttonText: 'Show Success',
    body: 'This is a success toast',
    header: 'Success!',
    headerColor: '#d4edda',
    bodyColor: '#198754',
  };

  errorData: ToastEvent = {
    type: Event.ERROR,
    buttonText: 'Show Error',
    body: 'This is an error toast',
    header: 'Error!',
    headerColor: '#f8d7da',
    bodyColor: '#dc3545',
  };

  warningData: ToastEvent = {
    type: Event.WARNING,
    buttonText: 'Show Warning',
    body: 'This is a warning toast',
    header: 'Warning!',
    headerColor: '#fff3cd',
    bodyColor: '#ffc107',
  };

  constructor(private toastService: ToastService) {}

  success() {
    this.toastService.showSuccess(this.successData);
  }

  error() {
    this.toastService.showError(this.errorData);
  }

  warning() {
    this.toastService.showWarning(this.warningData);
  }
}
