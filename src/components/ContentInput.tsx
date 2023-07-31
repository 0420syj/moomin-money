// ContentInput.tsx
import React, { FC, ChangeEvent } from 'react';

interface ContentInputProps {
	value: string;
	onChange: (value: string) => void;
}

const ContentInput: FC<ContentInputProps> = ({ value, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<>
			<label
				htmlFor="content"
				className="block text-sm font-medium text-gray-700"
			>
				내용
			</label>
			<input
				required
				id="content"
				type="text"
				value={value}
				onChange={handleChange}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</>
	);
};

export default ContentInput;
