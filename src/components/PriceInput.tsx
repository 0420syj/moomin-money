import useFormStore from '@/hooks/useFormStore';
import { useState } from 'react';

const PriceInput: React.FC = () => {
  const [priceString, setPriceString] = useState<string>('');
  const { price, setPrice } = useFormStore(state => ({
    price: state.price,
    setPrice: state.actions.setPrice,
  }));

  const formatNumberWithComma = (num: number): string => {
    return num.toLocaleString('en-US');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceString(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let priceValue = e.target.value;

    try {
      const calculatedValue = eval(priceValue.replace(/,/g, ''));
      setPriceString(formatNumberWithComma(calculatedValue));
      setPrice(calculatedValue);
    } catch (error) {
      setPrice(0);
      setPriceString('0');
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const priceValue = priceString.replace(/,/g, '');
    if (priceValue === '0') {
      setPriceString('');
    } else {
      setPriceString(priceValue);
    }
  };

  return (
    <>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        금액
      </label>
      <input
        required
        id="price"
        type="text"
        value={priceString}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete="off"
        inputMode="numeric"
        className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
    </>
  );
};

export default PriceInput;
