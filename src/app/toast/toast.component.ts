import {
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ToastEvent, Event, ToastEventsWithIndex } from './toast.types';

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

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close() {
    this.closeToast.emit(this.toastData.index);
  }
}
