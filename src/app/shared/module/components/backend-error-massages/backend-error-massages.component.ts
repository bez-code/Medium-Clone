import { Component, Input, OnInit } from '@angular/core';

import { BackendErrorsInterface } from 'src/app/shared/types/backendErors.interface';

@Component({
  selector: 'mc-backend-errors-massages',
  templateUrl: './backend-error-massages.component.html',
  styleUrls: ['./backend-error-massages.component.scss']
})
export class BackendErrorMassagesComponent implements OnInit {
  @Input('backendErrors')
  backendErrorsProps!: BackendErrorsInterface;

  errorMassages: string[] = [];


  ngOnInit(): void {
    this.errorMassages = Object.keys(this.backendErrorsProps).map((name: string) => {
      const massage = this.backendErrorsProps[name].join('')
      return `${name} ${massage}`
    }
    )
  }
}
