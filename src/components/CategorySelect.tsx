import React from 'react';

interface CategorySelectProps {
	selectedCategory: string;
	onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

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
				<option>🏠 주거</option>
				<option>🧺 생활</option>
				<option>🍎 식재료</option>
				<option>🍔 배달</option>
				<option>🍽️ 외식</option>
				<option>🍷 와인/술</option>
				<option>🏪 편의점</option>
				<option>🎠 문화/여가</option>
				<option>😺 냐옹</option>
				<option>🚗 교통</option>
				<option>✈️ 여행</option>
				<option>👔 옷/미용</option>
				<option>🏥 건강</option>
				<option>📚 자기개발</option>
				<option>❤️ 선물</option>
				<option>🪕 기타</option>
			</select>
		</>
	);
};

export default CategorySelect;
