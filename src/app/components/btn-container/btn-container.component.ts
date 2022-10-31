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

  constructor(private toastService: ToastService) {}

  success() {
    this.toastService.showSuccess('Success!', 'This is a success toast');
  }

  error() {
    this.toastService.showError('Error!', 'This is an error toast');
  }

  warning() {
    this.toastService.showWarning('Warning!', 'This is a warning toast');
  }
}
