import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { ToastEventLog } from '../../models/toast.types';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerComponent {
  toastLogs$ = this.toastService.toastLogs$;

  constructor(private toastService: ToastService) {}
}
