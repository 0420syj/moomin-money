import useFormStore, { Category, categoryMap } from '@/hooks/useFormStore';

const CategoryButtonGroup: React.FC = () => {
	const categoryList: Category[] = Object.values(categoryMap);

	const { category, setCategory } = useFormStore(state => ({
		category: state.category,
		setCategory: state.actions.setCategory,
	}));

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setCategory(event.currentTarget.value as Category);
	};

	return (
		<>
			<label className="block text-sm font-medium text-gray-700">
				카테고리
			</label>
			<div className="grid grid-cols-4 gap-4">
				{categoryList.map(categoryElement => (
					<div key={categoryElement}>
						<button
							type="button"
							value={categoryElement}
							className={`w-full py-2 rounded-lg shadow  ${
								category !== categoryElement
									? 'bg-blue-200'
									: 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white'
							}`}
							onClick={handleClick}
						>
							{category !== categoryElement
								? categoryElement.substring(0, 2)
								: categoryElement.substring(2)}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default CategoryButtonGroup;
