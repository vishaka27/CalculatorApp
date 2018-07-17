import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calculator state domain
 */

const selectCalculatorDomain = state => state.get('calculator', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Calculator
 */

const makeSelectCalculator = () =>
  createSelector(selectCalculatorDomain, substate => substate.toJS());

export default makeSelectCalculator;
export { selectCalculatorDomain };
