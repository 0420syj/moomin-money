'use client';

import { convertToDate } from '@/utils/date';
import { useEffect, useState } from 'react';

type DataType = {
	values: string[][];
};

export default function Page() {
	const [data, setData] = useState<DataType | null>(null);

	useEffect(() => {
		fetch('/api/sheets/와와 FO의 사본')
			.then(response => response.json())
			.then((data: DataType) => setData(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<>
			{data ? (
				<>
					<table>
						<thead>
							<tr>
								{data.values[0].map((header, index) => (
									<th key={index}>{header}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.values.slice(1).map((row, index) => (
								<tr key={index}>
									{row.map((cell, cellIndex) => (
										<td key={cellIndex}>
											{cellIndex === 0
												? convertToDate(
														Number(cell),
												  ).toLocaleDateString()
												: cell}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
}
