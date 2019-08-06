import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';
import { AuthDto } from '../../models/auth.model';

export enum AuthActions {
  LOGIN_USER = '[AUTH] Login user',
  REGISTER_USER = '[AUTH] Register user',
  SET_INITIAL_USER = '[AUTH] Set initial user',
  SET_CURRENT_USER = '[AUTH] Set current user'
}

export class LoginUser implements Action {
  readonly type = AuthActions.LOGIN_USER;
  constructor(public payload: AuthDto) {}
}

export class RegisterUser implements Action {
  readonly type = AuthActions.REGISTER_USER;
  constructor(public payload: AuthDto) {}
}

export class SetInitialUser implements Action {
  readonly type = AuthActions.SET_INITIAL_USER;
}

export class SetCurrentUser implements Action {
  readonly type = AuthActions.SET_CURRENT_USER;
  constructor(public payload: User | null) {}
}

export type Action = LoginUser | RegisterUser | SetCurrentUser | SetInitialUser;
