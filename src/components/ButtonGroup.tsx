import React from 'react';

interface ButtonGroupProps {
	selectedName: string;
	onNameButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
	selectedName,
	onNameButtonClick,
}) => {
	const nameLeftButtonClass = (name: string) =>
		`flex-1 px-4 py-2 text-sm font-medium border-t-2 border-b-2 border-l-2 border-r border-gray-200 rounded-l-lg ${
			selectedName === name
				? 'bg-blue-500 text-white'
				: 'bg-white text-black hover:bg-gray-100'
		}`;

	const nameRightButtonClass = (name: string) =>
		`flex-1 px-4 py-2 text-sm font-medium border-t-2 border-b-2 border-l border-r-2 border-gray-200 rounded-r-lg ${
			selectedName === name
				? 'bg-blue-500 text-white'
				: 'bg-white text-black hover:bg-gray-100'
		}`;

	return (
		<div className="flex" role="group">
			<button
				type="button"
				value="wanny"
				className={nameLeftButtonClass('wanny')}
				onClick={onNameButtonClick}
			>
				🐶 빵떡
			</button>
			<button
				type="button"
				value="moomin"
				className={nameRightButtonClass('moomin')}
				onClick={onNameButtonClick}
			>
				🐻‍❄️ 무민
			</button>
		</div>
	);
};

export default ButtonGroup;
