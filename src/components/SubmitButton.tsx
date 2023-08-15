interface SubmitButtonProps {
	isSubmitting: boolean;
	isFormIncomplete: boolean;
	children: React.ReactNode;
}

function SubmitButton({
	isSubmitting,
	isFormIncomplete,
	children,
}: SubmitButtonProps) {
	return (
		<button
			type="submit"
			disabled={isSubmitting}
			className={`w-full py-2 text-white rounded-lg shadow focus:outline-none  ${
				isFormIncomplete || isSubmitting
					? 'bg-blue-200 cursor-not-allowed'
					: 'bg-[#024280] hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
			}`}
		>
			{children}
		</button>
	);
}

export default SubmitButton;
