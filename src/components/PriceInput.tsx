import useFormStore from '@/hooks/useFormStore';
import React from 'react';

const PriceInput: React.FC = () => {
	const { price, setPrice } = useFormStore(state => ({
		price: state.price,
		setPrice: state.actions.setPrice,
	}));

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const priceValue = Number(e.target.value.replace(/,/g, ''));

		if (isNaN(priceValue)) {
			return;
		}

		setPrice(priceValue);
	};

	return (
		<>
			<label
				htmlFor="price"
				className="block text-sm font-medium text-gray-700"
			>
				금액
			</label>
			<input
				required
				id="price"
				type="text"
				value={price <= 0 ? '' : price.toLocaleString()}
				onChange={handleChange}
				autoComplete="off"
				inputMode="numeric"
				className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			/>
		</>
	);
};

export default PriceInput;
