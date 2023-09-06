import { useState } from 'react';
import './calculator.css';

function Calculator() {
	const [expression, setExpression] = useState('');
	const [output, setOutput] = useState(0);
	const actions = ['*', '+', '-', '.'];

	const updateExpression = (value: any) => {
		if (
			(actions.includes(value) && expression === '') ||
			(actions.includes(value) && actions.includes(expression.slice(-1)))
		) {
			return;
		}
		setExpression(expression + value);

		if (!actions.includes(value)) {
			setOutput(eval(expression + value).toString());
		}
	};

	const calculate = () => {
		setExpression(eval(expression).toString());
	};

	const clear = (e: any) => {
		if (expression === '') {
			return;
		}

		const value = expression.slice(0, -1);

		setExpression(value);

		if (value === '') {
			setOutput(0);
			return;
		}
		const lastChar = value.slice(-1);

		if (!actions.includes(lastChar)) {
			setOutput(eval(value).toString());
		} else {
			setOutput(eval(value.slice(0, -1)).toString());
		}
	};

	const numberToCommaWithDecimal = (num: number) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	const easteregg = () => {
		// show image to the user and disappear after 3 seconds
		const img = document.createElement('img');

		// choose random image betwwen two images
		const random = Math.floor(Math.random() * 2);
		if (random) {
			img.src =
				'https://i.pinimg.com/originals/f3/1e/9d/f31e9dc5314f1799925b62a2de5e2a7f.gif';
		} else {
			img.src = 'https://i.imgur.com/NWZpXai.gif';
		}

		img.style.position = 'fixed';
		img.style.top = '50%';
		img.style.left = '50%';
		img.style.transform = 'translate(-50%, -50%)';
		img.style.zIndex = '100';

		document.body.appendChild(img);

		// if click image then remove image
		img.addEventListener('click', () => {
			img.remove();
		});

		setTimeout(() => {
			img.remove();
		}, 10000);
	};

	const clearAll = (e: any) => {
		setExpression('');
		setOutput(0);
	};

	return (
		<div className="currency-calc">
			<div className="calculator-text">
				<div className="expression">{expression || 0}</div>
				<div className="output">
					₩ {output && numberToCommaWithDecimal(output)}
				</div>
			</div>
			<div className="calc-button">
				<div onClick={() => easteregg()}>이스터에그</div>
				<div onClick={e => clearAll(e)}>
					<button>
						<b>C</b>
					</button>
				</div>
				<div onClick={e => clear(e)}>
					<button>⌫</button>
				</div>
				<div onClick={() => updateExpression('7')}>
					<button>7</button>
				</div>
				<div onClick={() => updateExpression('8')}>
					<button>8</button>
				</div>
				<div onClick={() => updateExpression('9')}>
					<button>9</button>
				</div>
				<div onClick={() => updateExpression('*')}>
					<button>
						<b>×</b>
					</button>
				</div>

				<div onClick={() => updateExpression('4')}>
					<button>4</button>
				</div>
				<div onClick={() => updateExpression('5')}>
					<button>5</button>
				</div>
				<div onClick={() => updateExpression('6')}>
					<button>6</button>
				</div>
				<div onClick={() => updateExpression('-')}>
					<button>
						<b>-</b>
					</button>
				</div>
				<div onClick={() => updateExpression('1')}>
					<button>1</button>
				</div>
				<div onClick={() => updateExpression('2')}>
					<button>2</button>
				</div>
				<div onClick={() => updateExpression('3')}>
					<button>3</button>
				</div>
				<div onClick={() => updateExpression('+')}>
					<button>
						<b>+</b>
					</button>
				</div>
				<div onClick={() => updateExpression('0')}>
					<button>0</button>
				</div>
				<div onClick={() => updateExpression('.')}>
					<button>.</button>
				</div>
				<div onClick={calculate}>
					<button>
						<b>=</b>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
