import { ActionReducer, Action } from '@ngrx/store';

import { CursorPosition } from './editor.state';

export const UPDATE = 'UPDATE';

export const CursorPositionReducer: ActionReducer<CursorPosition> = (
  state: CursorPosition = { lineNumber: 0, column: 0 }, action: Action) => {

  switch (action.type) {
    case UPDATE:
      return action.payload;

    default:
      return state;
  }
};
