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

  onClickSuccess() {
    console.log('success');
  }

  onClickError() {
    console.log('error');
  }

  onClickWarning() {
    console.log('warn');
  }
}
