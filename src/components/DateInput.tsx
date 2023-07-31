// DateInput.tsx
import React, { ChangeEvent, FC } from 'react';
import { convertToSerial, convertToDate } from '@/utils/date';

interface DateInputProps {
	value: number;
	onChange: (value: number) => void;
}

const DateInput: FC<DateInputProps> = ({ value, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(convertToSerial(e.target.value) as number);
	};

	return (
		<>
			<label
				htmlFor="date"
				className="block text-sm font-medium text-gray-700"
			>
				날짜
			</label>
			<input
				required
				id="date"
				type="date"
				value={convertToDate(value).toISOString().slice(0, 10)}
				onChange={handleChange}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</>
	);
};

export default DateInput;
