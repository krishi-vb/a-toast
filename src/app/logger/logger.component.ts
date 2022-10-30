import { Component, Input, OnInit } from '@angular/core';
import { startWith } from 'rxjs';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  // @Input()
  logs: any[] = [];

  toastEvents = this.toastService.toastLogs;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}
}
