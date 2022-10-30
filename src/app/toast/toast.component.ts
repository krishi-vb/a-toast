import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { BUTTON, ButtonData } from '../btn-container/btn-container.component';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input()
  toastEnabled: boolean = false;

  @Input()
  toastData!: ButtonData;

  BUTTON = BUTTON;

  constructor() {}

  ngOnInit(): void {}

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
