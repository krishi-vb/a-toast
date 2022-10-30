import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event, ToastEventsWithIndex } from './toast.types';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input()
  toastEnabled: boolean = false;

  @Input()
  toastData!: ToastEventsWithIndex;

  @Output()
  closeToast = new EventEmitter<number>();

  EVENT = Event;

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close() {
    this.closeToast.emit(this.toastData.index);
  }
}
