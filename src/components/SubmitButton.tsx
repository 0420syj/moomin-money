import useFormStore from '@/hooks/useFormStore';

interface SubmitButtonProps {
	isSubmitting: boolean;
	children: React.ReactNode;
}

const SubmitButton = ({ isSubmitting, children }: SubmitButtonProps) => {
	const { isFormIncomplete } = useFormStore(state => ({
		isFormIncomplete: state.actions.isFormIncomplete,
	}));

	return (
		<button
			type="submit"
			disabled={isSubmitting}
			className={`w-full py-2 text-white rounded-lg shadow focus:outline-none  ${
				isFormIncomplete() || isSubmitting
					? 'bg-blue-200 cursor-not-allowed'
					: 'bg-[#024280] hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
			}`}
		>
			{children}
		</button>
	);
};

export default SubmitButton;
