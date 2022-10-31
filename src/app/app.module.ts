import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnContainerComponent } from './components/btn-container/btn-container.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoggerComponent } from './components/logger/logger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ToastService } from './services/toast.service';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnContainerComponent,
    ToastComponent,
    LoggerComponent,
    ToastContainerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
