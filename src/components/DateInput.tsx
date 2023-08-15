import useFormStore from '@/hooks/useFormStore';
import { convertToSerial, getTodayDateString } from '@/utils/date';
import React, { FC, ChangeEvent, useState } from 'react';

const DateInput: FC = () => {
	const today: string = getTodayDateString();
	const { setDate } = useFormStore(state => ({
		setDate: state.actions.setDate,
	}));
	const [viewDate, setViewDate] = useState<string>(today);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedDate = e.target.value;
		setViewDate(selectedDate);
		setDate(convertToSerial(selectedDate));
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
				min="1994-12-09"
				max="9999-12-31"
				value={viewDate}
				onChange={handleChange}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</>
	);
};

export default DateInput;
