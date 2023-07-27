import React from 'react';

interface PaymentSelectProps {
	selectedPayment: string;
	onPaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PaymentSelect: React.FC<PaymentSelectProps> = ({
	selectedPayment,
	onPaymentChange,
}) => {
	return (
		<div>
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
				<option>💳 신용카드</option>
				<option>💵 현금</option>
				<option>💲 제로페이</option>
				<option>➗ 할부</option>
			</select>
		</div>
	);
};

export default PaymentSelect;
