import React from 'react';

interface NoteInputProps {
	value: string;
	onChange: (value: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ value, onChange }) => {
	return (
		<div>
			<label
				htmlFor="note"
				className="block text-sm font-medium text-gray-700"
			>
				비고
			</label>
			<input
				required
				id="note"
				type="text"
				value={value}
				onChange={e => onChange(e.target.value)}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</div>
	);
};

export default NoteInput;
