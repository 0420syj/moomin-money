import React from 'react';
import { Category, categoryMap } from '@/hooks/useFormStore';

interface CategorySelectProps {
	selectedCategory: Category;
	onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const categoryList: Category[] = Object.values(categoryMap);

const CategorySelect: React.FC<CategorySelectProps> = ({
	selectedCategory,
	onCategoryChange,
}) => {
	return (
		<>
			<label
				htmlFor="category"
				className="block text-sm font-medium text-gray-700"
			>
				카테고리
			</label>
			<select
				id="category"
				value={selectedCategory}
				onChange={onCategoryChange}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			>
				{categoryList.map(category => (
					<option key={category}>{category}</option>
				))}
			</select>
		</>
	);
};

export default CategorySelect;
