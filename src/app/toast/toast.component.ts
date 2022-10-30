import { Component, ComponentRef, Input, OnInit } from '@angular/core';
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

  EVENT = Event;

  constructor() {}

  ngOnInit(): void {
    console.log(this.toastData);
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
