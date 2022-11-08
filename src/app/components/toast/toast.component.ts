import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { Event, ToastEvent } from '../../models/toast.types';

/**
 * Time in milli seconds
 */
const MAX_TIMEOUT_FOR_TOAST = 5000;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {
  @Input()
  toastEvent!: ToastEvent;

  EVENT = Event;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.close(this.toastEvent.toastId);
    }, MAX_TIMEOUT_FOR_TOAST);
  }

  close(toastId: any) {
    this.toastService.closeToast(toastId);
  }
}
