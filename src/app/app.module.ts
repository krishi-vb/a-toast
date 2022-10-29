import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnContainerComponent } from './btn-container/btn-container.component';
import { ToastComponent } from './toast/toast.component';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [AppComponent, BtnContainerComponent, ToastComponent, LoggerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
