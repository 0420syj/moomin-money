import { Payment, paymentMap } from '@/hooks/useFormStore';
import React from 'react';

interface PaymentSelectProps {
	selectedPayment: Payment;
	onPaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const paymentList: Payment[] = Object.values(paymentMap);

const PaymentSelect: React.FC<PaymentSelectProps> = ({
	selectedPayment,
	onPaymentChange,
}) => {
	return (
		<>
			<label
				htmlFor="payment"
				className="block text-sm font-medium text-gray-700"
			>
				결제수단
			</label>
			<select
				id="payment"
				value={selectedPayment}
				onChange={onPaymentChange}
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			>
				{paymentList.map(payment => (
					<option key={payment}>{payment}</option>
				))}
			</select>
		</>
	);
};

export default PaymentSelect;
