import useFormStore, { Name } from '@/hooks/useFormStore';

const NameButtonGroup: React.FC = () => {
	const { name, setName } = useFormStore(state => ({
		name: state.name,
		setName: state.actions.setName,
	}));

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setName(event.currentTarget.value as Name);
		if (navigator.vibrate) {
			navigator.vibrate(15);
		}
	};

	const nameLeftButtonClass = (nameParam: string) =>
		`flex-1 px-4 py-2 text-sm font-medium border-t-2 border-b-2 border-l-2 border-r border-gray-200 rounded-l-lg ${
			name === nameParam
				? 'bg-blue-500 text-white'
				: 'bg-white text-black hover:bg-gray-100'
		}`;

	const nameRightButtonClass = (nameParam: string) =>
		`flex-1 px-4 py-2 text-sm font-medium border-t-2 border-b-2 border-l border-r-2 border-gray-200 rounded-r-lg ${
			name === nameParam
				? 'bg-blue-500 text-white'
				: 'bg-white text-black hover:bg-gray-100'
		}`;

	return (
		<div className="flex" role="group">
			<button
				type="button"
				value="wanny"
				className={nameLeftButtonClass('wanny')}
				onClick={handleClick}
			>
				🐶 빵떡
			</button>
			<button
				type="button"
				value="moomin"
				className={nameRightButtonClass('moomin')}
				onClick={handleClick}
			>
				🐻‍❄️ 무민
			</button>
		</div>
	);
};

export default NameButtonGroup;
