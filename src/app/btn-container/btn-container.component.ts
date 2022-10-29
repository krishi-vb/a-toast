import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum BUTTON {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ButtonData {
  type: BUTTON;
  bodyCopy: string;
  header: string;
  backgroundColor: string;
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
    bodyCopy: 'This is a success toast',
    header: 'Success!',
    backgroundColor: '#d4edda',
  };

  errorData: ButtonData = {
    type: BUTTON.ERROR,
    bodyCopy: 'This is an error toast',
    header: 'Error!',
    backgroundColor: '#f8d7da',
  };

  warningData: ButtonData = {
    type: BUTTON.WARNING,
    bodyCopy: 'This is a warning toast',
    header: 'Warning!',
    backgroundColor: '#fff3cd',
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
