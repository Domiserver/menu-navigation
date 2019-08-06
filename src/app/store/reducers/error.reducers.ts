import { ErrorActions, Action } from '../actions/error.actions';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

export const errorReducers: (state: ErrorState, action: Action) => ErrorState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ErrorActions.ADD_ERROR:
      return { ...state, error: action.payload };
    case ErrorActions.REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
