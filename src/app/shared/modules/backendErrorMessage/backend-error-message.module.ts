import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendErrorMessageComponent } from './backend-error-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessageComponent],
  exports: [BackendErrorMessageComponent],
})
export class BackendErrorMessageModule {}
