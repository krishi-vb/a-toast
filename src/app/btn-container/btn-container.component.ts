import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { ToastEvent, Event } from '../toast/toast.types';

@Component({
  selector: 'app-btn-container',
  templateUrl: './btn-container.component.html',
  styleUrls: ['./btn-container.component.scss'],
})
export class BtnContainerComponent implements OnInit {
  @Output()
  toastEnabled: boolean = false;

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

  // @Output()
  // successClicked = new EventEmitter<ToastEvent>();

  // @Output()
  // errorClicked = new EventEmitter<ToastEvent>();

  // @Output()
  // warningClicked = new EventEmitter<ToastEvent>();

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  success() {
    // this.successClicked.emit(this.successData);
    this.toastService.showSuccess(this.successData);
  }

  error() {
    // this.errorClicked.emit(this.errorData);
    this.toastService.showError(this.errorData);
  }

  warning() {
    // this.warningClicked.emit(this.warningData);
    this.toastService.showWarning(this.warningData);
  }
}
