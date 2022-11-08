export enum Event {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

export interface ToastEvent {
  type?: Event;
  body?: string;
  header?: string;
  headerColor?: string;
  bodyColor?: string;
  toastId?: number;
}

export interface ToastMessage {
  body?: string;
  header?: string;
  type?: Event;
}

export interface DefaultToastConfig {
  headerColor?: string;
  bodyColor?: string;
}

export interface ToastEventLog {
  type?: Event;
  time?: string;
}
