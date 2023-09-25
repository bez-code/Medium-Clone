import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackendErrorMassagesComponent } from './components/backend-error-massages/backend-error-massages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BackendErrorMassagesComponent
  ],
  exports: [BackendErrorMassagesComponent]
})
export class BackendErrorMassagesModule {

}
