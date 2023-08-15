import useFormStore from '@/hooks/useFormStore';
import React from 'react';

const NoteInput: React.FC = () => {
	const { note, setNote } = useFormStore(state => ({
		note: state.note,
		setNote: state.actions.setNote,
	}));

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote(e.target.value);
	};

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
				value={note}
				onChange={handleChange}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</div>
	);
};

export default NoteInput;
