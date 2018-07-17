import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class CalculatorDisplay extends Component {
	render() {
        const { children, invalidExpression, result } = this.props;
        const invalidClassName = invalidExpression ? 'invalid-expression' : '';
        return (
			<div
				className={classnames("calculator__display", `${invalidClassName}`)}
            >
                {(!invalidExpression && result) && (
                    <span>{result}</span>
                )}
				{(!invalidExpression) && children && children.map((item, index) => {
                    return (
                        <span key={index}>{item.input}</span>
                    )
                })}
                {invalidExpression && (
                    <div className="error-display">
                        BAD EXPRESSION!
                    </div>
                )}
			</div>
        );
	}
}

export default CalculatorDisplay;