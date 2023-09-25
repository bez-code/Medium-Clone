import { BackendErrorsInterface } from "src/app/shared/types/backendErors.interface"
import { currentUserInterface } from "src/app/shared/types/currentUserInterface"

export interface AuthStateInterface {
  isSubmitting: boolean
  currenUser: currentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null

}

