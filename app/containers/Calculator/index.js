/**
 *
 * Calculator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CalculatorWrapper from '../../components/CalculatorWrapper';


import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCalculator from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Calculator extends React.PureComponent {
  render() {
    return <CalculatorWrapper configJSON={this.props.calculator} />;
  }
}

Calculator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  calculator: makeSelectCalculator(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'calculator', reducer });
const withSaga = injectSaga({ key: 'calculator', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Calculator);
