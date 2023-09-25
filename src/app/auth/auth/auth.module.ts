import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '../store/reducer';
import { RegisterComponent } from '../component/register/register/register.component';
import { AuthService } from '../services/auth.service';
import { RegisterEffect } from '../store/register.effect';

const routes: Routes = [
  {path:'register', component: RegisterComponent}
];

@NgModule({
  declarations: [RegisterComponent],
  providers:[AuthService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect])
  ]
})
export class AuthModule { }
