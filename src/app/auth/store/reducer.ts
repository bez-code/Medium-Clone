import { Action, createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from '../types/AuthState.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from "./register.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currenUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const authReducer = createReducer(
  initialState,
  on
    (registerAction,
      (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
      })
    ),
  on(registerSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currenUser: action.currentUser
  })
  ),
  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
