import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggerComponent {
  toastLogs$ = this.toastService.toastLogs$;

  constructor(private toastService: ToastService) {}

  trackByIndex(index: number) {
    return index;
  }
}
