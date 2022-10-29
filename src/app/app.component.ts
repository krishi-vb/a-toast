import { Component } from '@angular/core';
import { ButtonData } from './btn-container/btn-container.component';

export interface LogData
  extends Omit<ButtonData, 'bodyCopy' | 'header' | 'backgroundColor'> {
  time?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a-toast';
  toastEnabled: boolean = false;
  clickLogs: LogData[] = [];
  buttonThatWasClicked: string = '';

  click(data: ButtonData) {
    let log: LogData = { type: data.type };
    log.time = new Date().toLocaleTimeString();
    this.clickLogs.push(log);
    console.log('click was registered');
  }
}
