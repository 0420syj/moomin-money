import { Category, categoryMap } from '@/hooks/useFormStore';

interface CategorySelectProps {
	selectedCategory: Category;
	onCategoryButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CategoryButtonGroup: React.FC<CategorySelectProps> = ({
	selectedCategory,
	onCategoryButtonClick,
}) => {
	const categoryList: Category[] = Object.values(categoryMap);

	return (
		<>
			<label className="block text-sm font-medium text-gray-700">
				카테고리
				{/* : {selectedCategory} */}
			</label>
			<div className="grid grid-cols-4 gap-4">
				{categoryList.map(category => (
					<div key={category}>
						<button
							type="button"
							value={category}
							className={`w-full py-2 rounded-lg shadow  ${
								selectedCategory !== category
									? 'bg-blue-200'
									: 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white'
							}`}
							onClick={onCategoryButtonClick}
						>
							{selectedCategory !== category
								? category.substring(0, 2)
								: category.substring(2)}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default CategoryButtonGroup;
