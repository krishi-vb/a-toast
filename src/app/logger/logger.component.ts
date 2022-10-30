import { Component } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { ToastEventLog } from '../toast/toast.types';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent {
  toastEvents: ToastEventLog[] = this.toastService.toastLogs;

  constructor(private toastService: ToastService) {}
}
