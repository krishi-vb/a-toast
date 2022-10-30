import { Component } from '@angular/core';
import { ToastEvent } from './toast/toast.types';

export interface LogData
  extends Omit<
    ToastEvent,
    'body' | 'header' | 'headerColor' | 'bodyColor' | 'buttonText'
  > {
  time?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A Toast';
  toastEnabled: boolean = false;
  clickLogs: LogData[] = [];
  notifications: ToastEvent[] = [];
  buttonThatWasClicked: string = '';
  toastData!: ToastEvent;

  onBtnClick(data: ToastEvent) {
    this.notifications.push(data);
    let log: LogData = { type: data.type };
    log.time = new Date().toLocaleTimeString();
    this.clickLogs.push(log);
    this.toastData = data;
    this.toastEnabled = true;
    console.log('click was registered');
    console.log(this.notifications);
  }
}
