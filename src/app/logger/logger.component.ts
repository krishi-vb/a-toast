import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  @Input()
  logs: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
