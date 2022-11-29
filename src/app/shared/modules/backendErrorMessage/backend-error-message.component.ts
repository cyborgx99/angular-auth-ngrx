import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'nc-backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['backend-error-message.component.scss'],
})
export class BackendErrorMessageComponent implements OnInit {
  @Input('error') errorInput: BackendErrorResponseInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Array.isArray(this.errorInput.message)
      ? this.errorInput.message
      : [this.errorInput.message];
  }
}
