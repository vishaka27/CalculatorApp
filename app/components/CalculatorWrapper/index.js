import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Buttons from '../Buttons/index';
import CalculatorDisplay from '../CalculatorDisplay/index';

import './styles.scss';

class CalculatorWrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: [],
			invalidExpression: false,
			result : ''
		};
		this.arr = [];
	}

	clickSubmit = (e) => {
		e.preventDefault();

		const { userInput, invalidExpression, result } = this.state;
		let resultArr = [];

		userInput.forEach((item, index) => {
			if ((userInput[index].id === 'operator') && (userInput[index+1] !== null) && (userInput[index+1] && userInput[index+1].id === 'operator' )) {
				resultArr.length = 0;
				this.setState({ invalidExpression: true, result: resultArr });
			} else {
				resultArr.push(item.input);
			}
		});
		userInput.length = 0;
		let res = result.length;
		if (result) {
			resultArr.unshift(result);
		}
		if (!this.state.invalidExpression) {
			this.setState({ result: eval(resultArr.join('').toString()) });
		}
	}

	clickOperators = (e) => {
		e.preventDefault();
		let { arr } = this;
		let inputOnlyArr = [];
		const { userInput, invalidExpression, result } = this.state;
		arr.push({input: e.target.innerHTML, id: e.target.dataset.action});
		inputOnlyArr.push(e.target.innerHTML);
		if (e.target.innerHTML === 'AC') {
			arr.length = 0;
			this.setState({ result: '' });
		}
		this.setState({ userInput: arr, invalidExpression: false });
	}

	render() {
		const { configJSON } = this.props;
		const { userInput, invalidExpression, result } = this.state;
		return (
			<div className='calculator-wrapper'>
				<CalculatorDisplay
					children={userInput}
					invalidExpression={invalidExpression}
					result={result}
				/>
			<form name="calculator">
				<Buttons
					label={configJSON.configJSON}
					onClick={this.clickOperators}
				/>
				<Buttons label={[{buttonId: 'submit', symbol: '=', class: 'submit-button'}]} onClick={this.clickSubmit} />
			</form>
		</div>
    );
}
}

export default CalculatorWrapper;