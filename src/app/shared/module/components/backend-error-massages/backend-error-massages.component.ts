import { Component, Input } from '@angular/core';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErors.interface';

@Component({
  selector: 'mc-backend-errors-massages',
  templateUrl: './backend-error-massages.component.html',
  styleUrls: ['./backend-error-massages.component.scss']
})
export class BackendErrorMassagesComponent {
  @Input('backendErrors')
  backendErrorsProps!: BackendErrorsInterface;

  errorMassages: string[] = [];
}
