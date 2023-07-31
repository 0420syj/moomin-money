'use client';

import { convertToDate } from '@/utils/date';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import ButtonGroup from '@/components/NameButtonGroup';
import useFormStore, { Name } from '@/hooks/useFormStore';

type DataType = {
	values: string[][];
};

export default function Page() {
	const [data, setData] = useState<DataType | null>(null);

	const formData = useFormStore();

	const onNameButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		formData.actions.setName(event.currentTarget.value as Name);
	};

	const sheetNameMap = {
		wanny: process.env.NEXT_PUBLIC_GOOGLE_WANNY_SHEET_NAME as string,
		moomin: process.env.NEXT_PUBLIC_GOOGLE_MOOMIN_SHEET_NAME as string,
	};

	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin');
		},
	});

	useEffect(() => {
		fetch(`/api/sheets/${sheetNameMap[formData.name]}`)
			.then(response => response.json())
			.then((data: DataType) => setData(data))
			.catch(error => console.error(error));
	}, [formData.name]);

	return (
		<>
			<ButtonGroup
				selectedName={formData.name}
				onNameButtonClick={onNameButtonClick}
			/>
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
