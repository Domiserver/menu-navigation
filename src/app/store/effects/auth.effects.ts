import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map, tap } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { AppState } from '../../store';
import { AuthService } from '../../services/auth.service';
import * as fromAuth from '../actions/auth.actions';
import * as fromError from '../actions/error.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  @Effect()
  setInitialUser$: Observable<Action> = this.action$.pipe(
    ofType<fromAuth.SetInitialUser>(fromAuth.AuthActions.SET_INITIAL_USER),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap((action: fromAuth.SetInitialUser) =>
      this.authService.whoami().pipe(
        map((user: User) => new fromAuth.SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new fromAuth.SetCurrentUser(null));
          this.authService.token = null;
          return of(new fromError.AddError(err.error));
        })
      )
    )
  );

  @Effect()
  loginUser$: Observable<Action> = this.action$.pipe(
    ofType<fromAuth.LoginUser>(fromAuth.AuthActions.LOGIN_USER),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap((action: fromAuth.LoginUser) =>
      this.authService.auth('login', action.payload).pipe(
        map((user: User) => new fromAuth.SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new fromAuth.SetCurrentUser(null));
          this.authService.token = null;
          return of(new fromError.AddError(err.error));
        })
      )
    )
  );

  @Effect()
  registerUser$: Observable<Action> = this.action$.pipe(
    ofType<fromAuth.RegisterUser>(fromAuth.AuthActions.REGISTER_USER),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap((action: fromAuth.RegisterUser) =>
      this.authService.auth('register', action.payload).pipe(
        map((user: User) => new fromAuth.SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new fromAuth.SetCurrentUser(null));
          this.authService.token = null;
          return of(new fromError.AddError(err.error));
        })
      )
    )
  );
}
