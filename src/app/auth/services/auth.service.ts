import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http"

import { RegisterRequestInterface } from "../types/RegisterRequestInterface";
import { currentUserInterface } from "src/app/shared/types/currentUserInterface";
import { AuthResponseInterface } from "../types/authResponce.interface";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<currentUserInterface> {
    const url = "http://conduit.productionready.io/api"
    return this.http.post<AuthResponseInterface>(url + '/users', data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
