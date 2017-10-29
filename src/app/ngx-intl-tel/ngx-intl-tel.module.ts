import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgxIntlTelComponent } from './ngx-intl-tel.component';

import { NgxIntlTelService } from './ngx-intl-tel.service';

@NgModule({
  declarations: [
    // NgxIntlTelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // NgxIntlTelComponent
  ],
  providers: [NgxIntlTelService],
})
export class NgxIntlTelModule { }
