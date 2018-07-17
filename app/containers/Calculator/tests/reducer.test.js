import { fromJS } from 'immutable';
import calculatorReducer from '../reducer';

describe('calculatorReducer', () => {
  it('returns the initial state', () => {
    expect(calculatorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
