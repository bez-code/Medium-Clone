import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from 'src/app/auth/store/register.action';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';
import { RegisterRequestInterface } from 'src/app/auth/types/RegisterRequestInterface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue()
  }
  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector)),
      console.log('isSubmitting', this.isSubmitting$)
  }

  initializeForm() {
    console.log('initialize')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log('submit', this.form.value)
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({ request }))
  }
}
