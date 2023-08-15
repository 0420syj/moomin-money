import useFormStore, { Payment, paymentMap } from '@/hooks/useFormStore';

const PaymentButtonGroup: React.FC = () => {
	const paymentList: Payment[] = Object.values(paymentMap);

	const { payment, setPayment } = useFormStore(state => ({
		payment: state.payment,
		setPayment: state.actions.setPayment,
	}));

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setPayment(event.currentTarget.value as Payment);
	};

	return (
		<>
			<label className="block text-sm font-medium text-gray-700">
				결제수단
			</label>
			<div className="grid grid-cols-4 gap-4">
				{paymentList.map(paymentElement => (
					<div key={paymentElement}>
						<button
							type="button"
							value={paymentElement}
							className={`w-full py-2 rounded-lg shadow  ${
								payment !== paymentElement
									? 'bg-blue-200'
									: 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white'
							}`}
							onClick={handleClick}
						>
							{payment !== paymentElement
								? paymentElement.substring(0, 2)
								: paymentElement.substring(2)}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default PaymentButtonGroup;
