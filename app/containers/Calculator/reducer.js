/*
 *
 * Calculator reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';
import configJSON from './configJSON';

export const initialState = fromJS({
  configJSON: configJSON
});

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default calculatorReducer;
