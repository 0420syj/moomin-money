import Calculator from '@/components/Calculator';
import useFormStore from '@/hooks/useFormStore';
import { useState } from 'react';

const PriceInput: React.FC = () => {
	const [openCalculator, setOpenCalculator] = useState(false);

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
			<button
				type="button"
				onClick={() => setOpenCalculator(!openCalculator)}
				className="px-4 py-2 mt-1 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				계산기
			</button>
			{openCalculator && <Calculator />}
		</>
	);
};

export default PriceInput;
