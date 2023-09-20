import { createAction, props } from "@ngrx/store";
import { actionTypes } from "./actionType";

export const registerAction = createAction (
  actionTypes.REGISTER,
  props<{username:string; email:string; password:string}>()
)
