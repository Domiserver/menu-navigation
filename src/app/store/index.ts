import { ActionReducerMap } from '@ngrx/store';
// import * as fromRouter from '@ngrx/router-store';
import { AuthEffects } from './effects/auth.effects';
import { authReducer, AuthState } from './reducers/auth.reducers';
import { ErrorState, errorReducers } from './reducers/error.reducers'
// import { RouterStateUrl } from '@app/store/reducers/router.reducer';

export const effects = [AuthEffects];

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducers,
  //router: fromRouter.routerReducer
};

export interface AppState {
  auth: AuthState;
  error: ErrorState;
  //router: fromRouter.RouterReducerState<RouterStateUrl>;
}
