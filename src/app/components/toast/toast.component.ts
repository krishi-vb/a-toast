import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  Event,
  ToastEvent,
  ToastEventsWithIndex,
} from '../../models/toast.types';

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

  @Output()
  closeToast = new EventEmitter<unknown>();

  EVENT = Event;

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, MAX_TIMEOUT_FOR_TOAST);
  }

  close() {
    this.closeToast.emit();
  }
}
