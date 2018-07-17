import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import './styles.scss';

class Buttons extends Component {

	onClick = (event) => {
		const { onClick } = this.props;

		if (typeof onClick === 'function') {
			event.preventDefault();
        	onClick(event);
		}
	}

	render() {
		const { label, onClick } = this.props;
		let uniqueKey = 0;
		let buttonClass;

		return (
			<div
				className="calculator__keys"
			>
				{label.map((item, index) => {
					uniqueKey = uniqueKey + index;
					buttonClass = item.class ? item.class : '';
						return (
							<a
								className={classnames("key--operator", `${item.class}`)}
								key = {index + uniqueKey}
								data-action={item.buttonId ? item.buttonId : ''}
								onClick={(event) => this.onClick(event)}
							>
								{item.symbol}
							</a>
							
						)
				})}
			</div>
		);
	}
}

Buttons.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.array
}

export default Buttons;