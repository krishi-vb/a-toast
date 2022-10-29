import { Component } from '@angular/core';
import { ButtonData } from './btn-container/btn-container.component';

export interface LogData
  extends Omit<
    ButtonData,
    'bodyCopy' | 'header' | 'headerColor' | 'bodyColor' | 'buttonText'
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
  notifications: ButtonData[] = [];
  buttonThatWasClicked: string = '';
  toastData!: ButtonData;

  onBtnClick(data: ButtonData) {
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
