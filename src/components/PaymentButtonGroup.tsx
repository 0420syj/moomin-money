import { Payment, paymentMap } from '@/hooks/useFormStore';

interface PaymentSelectProps {
	selectedPayment: Payment;
	onPaymentButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PaymentButtonGroup: React.FC<PaymentSelectProps> = ({
	selectedPayment,
	onPaymentButtonClick,
}) => {
	const paymentList: Payment[] = Object.values(paymentMap);

	return (
		<>
			<label className="block text-sm font-medium text-gray-700">
				결제수단 : {selectedPayment}
			</label>
			<div className="space-y-2 columns-4">
				{paymentList.map(payment => (
					<div key={payment}>
						<button
							type="button"
							value={payment}
							className={`w-full py-2 rounded-lg shadow focus:outline-none  ${
								selectedPayment !== payment
									? 'bg-blue-200'
									: 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
							}`}
							onClick={onPaymentButtonClick}
						>
							{payment.substring(0, 2)}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default PaymentButtonGroup;
