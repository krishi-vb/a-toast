export enum Event {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ToastEvent {
  type?: Event;
  buttonText?: string;
  body?: string;
  header?: string;
  headerColor?: string;
  bodyColor?: string;
}

export interface ToastEventLog {
  type?: Event;
  time?: string;
}

export interface ToastEventsWithIndex {
  event: ToastEvent;
  index: number;
}
