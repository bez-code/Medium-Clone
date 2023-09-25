import { createFeatureSelector, createSelector } from "@ngrx/store";

import { appStateInterface } from "src/app/shared/types/appState.interface";
import { AuthStateInterface } from '../types/AuthState.interface';

export const authFeatureSelector = createFeatureSelector<any>('auth');


export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting)

export const validationErrorSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
