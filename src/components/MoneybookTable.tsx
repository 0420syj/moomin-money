'use client';

import { convertToDate, getAllSerialDatesByMonth } from '@/utils/date';
import { useEffect, useState } from 'react';
import NameButtonGroup from '@/components/NameButtonGroup';
import useFormStore, { Name } from '@/hooks/useFormStore';

type DataType = {
	values: string[][];
};

const MoneybookTable = () => {
	const [data, setData] = useState<DataType | null>(null);

	const formData = useFormStore();

	const sheetNameMap = {
		wanny: process.env.NEXT_PUBLIC_GOOGLE_WANNY_SHEET_NAME as string,
		moomin: process.env.NEXT_PUBLIC_GOOGLE_MOOMIN_SHEET_NAME as string,
	};

	useEffect(() => {
		setData(null);

		fetch(`/api/sheets/${sheetNameMap[formData.name]}`)
			.then(response => response.json())
			.then((data: DataType) => setData(data))
			.catch(error => console.error(error));
	}, [formData.name]);

	const todayYear = new Date().getFullYear();
	const todayMonth = new Date().getMonth() + 1;

	const serialDateList = getAllSerialDatesByMonth(todayYear, todayMonth);
	const lastMonthSerialDateList = getAllSerialDatesByMonth(
		todayYear,
		todayMonth - 1,
	);

	let filteredData = data?.values.filter(
		row =>
			serialDateList.includes(Number(row[0])) ||
			lastMonthSerialDateList.includes(Number(row[0])),
	);
	filteredData?.sort((a, b) => Number(a[0]) - Number(b[0]));

	return (
		<>
			<NameButtonGroup />
			{data ? (
				<>
					<table>
						<thead>
							<tr>
								<th>날짜</th>
								<th>내용</th>
								<th>금액</th>
								<th>카테고리</th>
								<th>결제수단</th>
								<th>비고</th>
							</tr>
						</thead>
						<tbody>
							{filteredData?.map((row, index) => (
								<tr key={index}>
									<td>
										{convertToDate(
											Number(row[0]),
										).toLocaleDateString()}
									</td>
									<td>{row[1]}</td>
									<td>{Number(row[2]).toLocaleString()}원</td>
									<td>{row[3]}</td>
									<td>{row[4]}</td>
									<td>{row[5]}</td>
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
};

export default MoneybookTable;
