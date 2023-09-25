import { createAction, props } from "@ngrx/store";

import { actionTypes } from "./actionType";
import { RegisterRequestInterface } from "../types/RegisterRequestInterface";
import { currentUserInterface } from "src/app/shared/types/currentUserInterface";

export const registerAction = createAction(
  actionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  actionTypes.REGISTER_SUCCESS,
  props<{ currentUser: currentUserInterface }>()
);

export const registerFailureAction = createAction(actionTypes.REGISTER_FAILURE)
