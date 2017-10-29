import { NgxIntlTelComponent } from './ngx-intl-tel/ngx-intl-tel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgxIntlTelModule } from './ngx-intl-tel/ngx-intl-tel.module';

@NgModule({
  declarations: [
    AppComponent,
    NgxIntlTelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxIntlTelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
