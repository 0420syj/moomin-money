'use client';

import { useEffect, useState } from 'react';

/**
 * @deprecated use Server Side Rendering instead
 */
const MoneySpentBoard = () => {
	const mainSheetName = process.env
		.NEXT_PUBLIC_GOOGLE_MAIN_SHEET_NAME as string;

	const [wannyMoneySpent, setWannyMoneySpent] = useState(0);
	const [moominMoneySpent, setMoominMoneySpent] = useState(0);
	const [totalMoneySpent, setTotalMoneySpent] = useState(0);

	useEffect(() => {
		fetch(`/api/sheets/${mainSheetName}?range=C24`)
			.then(response => response.json())
			.then(data => data.values[0][0])
			.then(setWannyMoneySpent)
			.catch(error => console.error(error));

		fetch(`/api/sheets/${mainSheetName}?range=C25`)
			.then(response => response.json())
			.then(data => data.values[0][0])
			.then(setMoominMoneySpent)
			.catch(error => console.error(error));

		fetch(`/api/sheets/${mainSheetName}?range=C26`)
			.then(response => response.json())
			.then(data => data.values[0][0])
			.then(setTotalMoneySpent)
			.catch(error => console.error(error));
	}, []);

	return (
		<div className="flex flex-row justify-around mb-4">
			<div className="flex flex-col items-center">
				<div>🐶 빵떡</div>
				<div>₩{wannyMoneySpent.toLocaleString()}</div>
			</div>
			<div className="flex flex-col items-center">
				<div>💵 합계</div>
				<div>₩{totalMoneySpent.toLocaleString()}</div>
			</div>
			<div className="flex flex-col items-center">
				<div>🐻‍❄️ 무민</div>
				<div>₩{moominMoneySpent.toLocaleString()}</div>
			</div>
		</div>
	);
};

export default MoneySpentBoard;
