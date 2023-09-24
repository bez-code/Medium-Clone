import { createAction, props } from "@ngrx/store";
import { actionTypes } from "./actionType";
import { RegisterRequestInterface } from "../types/RegisterRequestInterface";

export const registerAction = createAction(
  actionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)
