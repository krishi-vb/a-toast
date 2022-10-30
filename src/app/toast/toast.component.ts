import {
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ToastEvent, Event } from './toast.types';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input()
  toastEnabled: boolean = false;

  @Input()
  toastData!: ToastEvent;

  @Output()
  closeToast = new EventEmitter();

  EVENT = Event;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  close() {
    this.closeToast.emit();
  }

  // constructor(private compRef: ComponentRef<ToastComponent>) {}

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.destroy();
  //   }, 5000);
  // }

  // destroy() {
  //   console.log(this.compRef);
  //   this.compRef.destroy();
  // }
}
