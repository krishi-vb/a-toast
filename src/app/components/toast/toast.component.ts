import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event, ToastEventsWithIndex } from '../../models/toast.types';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input()
  toastData!: ToastEventsWithIndex;

  @Output()
  closeToast = new EventEmitter<number>();

  /**
   * Time in milli seconds
   */
  MAX_TIMEOUT_FOR_TOAST = 5000;

  EVENT = Event;

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, this.MAX_TIMEOUT_FOR_TOAST);
  }

  close() {
    this.closeToast.emit(this.toastData.index);
  }
}
