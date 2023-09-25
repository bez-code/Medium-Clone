import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from "@angular/common/http";

import { registerAction, registerFailureAction, registerSuccessAction } from "./register.action";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { currentUserInterface } from "src/app/shared/types/currentUserInterface";

@Injectable()

export class RegisterEffect {
  register$ = createEffect(() => this.action$
    .pipe(ofType(registerAction),
      switchMap(({ request }) => {
        return this.authservice.register(request).pipe(
          map((currentUser: currentUserInterface) => {
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error.errors }))
          })
        )
      })
    )
  )

  constructor(
    private action$: Actions,
    private authservice: AuthService) { }

}
