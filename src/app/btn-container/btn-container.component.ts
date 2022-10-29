import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum BUTTON {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ButtonData {
  type: BUTTON;
  buttonText: string;
  bodyCopy: string;
  header: string;
  headerColor: string;
  bodyColor: string;
}

@Component({
  selector: 'app-btn-container',
  templateUrl: './btn-container.component.html',
  styleUrls: ['./btn-container.component.scss'],
})
export class BtnContainerComponent implements OnInit {
  @Output()
  toastEnabled: boolean = false;

  BUTTON = BUTTON;

  successData: ButtonData = {
    type: BUTTON.SUCCESS,
    buttonText: 'Show Success',
    bodyCopy: 'This is a success toast',
    header: 'Success!',
    headerColor: '#d4edda',
    bodyColor: '#198754',
  };

  errorData: ButtonData = {
    type: BUTTON.ERROR,
    buttonText: 'Show Error',
    bodyCopy: 'This is an error toast',
    header: 'Error!',
    headerColor: '#f8d7da',
    bodyColor: '#dc3545',
  };

  warningData: ButtonData = {
    type: BUTTON.WARNING,
    buttonText: 'Show Warning',
    bodyCopy: 'This is a warning toast',
    header: 'Warning!',
    headerColor: '#fff3cd',
    bodyColor: '#ffc107',
  };

  @Output()
  successClicked = new EventEmitter<ButtonData>();

  @Output()
  errorClicked = new EventEmitter<ButtonData>();

  @Output()
  warningClicked = new EventEmitter<ButtonData>();

  constructor() {}

  ngOnInit(): void {}

  success() {
    this.successClicked.emit(this.successData);
  }

  error() {
    this.errorClicked.emit(this.errorData);
  }

  warning() {
    this.warningClicked.emit(this.warningData);
  }
}
