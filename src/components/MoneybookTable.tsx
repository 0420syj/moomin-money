'use client';

import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { convertToDate, getAllSerialDatesByMonth } from '@/utils/date';
import NameButtonGroup from '@/components/NameButtonGroup';
import useFormStore from '@/hooks/useFormStore';

type DataType = {
	values: string[][];
};

const fetchSheetData = (sheetName: string) =>
	fetch(`/api/sheets/${sheetName}`)
		.then(response => response.json())
		.catch(error => console.error(error));

const MoneybookTable = () => {
	const [displayedDataCount, setDisplayedDataCount] = useState(20);
	const formData = useFormStore();

	const sheetNameMap = {
		wanny: process.env.NEXT_PUBLIC_GOOGLE_WANNY_SHEET_NAME as string,
		moomin: process.env.NEXT_PUBLIC_GOOGLE_MOOMIN_SHEET_NAME as string,
	};

	const { data, isLoading, isError } = useQuery<DataType>(
		['sheetData', sheetNameMap[formData.name]],
		() => fetchSheetData(sheetNameMap[formData.name]),
	);

	const todayYear = new Date().getFullYear();
	const todayMonth = new Date().getMonth() + 1;

	const serialDateList = getAllSerialDatesByMonth(todayYear, todayMonth);

	// get max value of serialDateList
	const maxSerialDate = Math.max(...serialDateList);

	let filteredData = data?.values.filter(
		row => Number(row[0]) <= maxSerialDate,
	);
	filteredData?.sort((a, b) => Number(b[0]) - Number(a[0]));

	useEffect(() => {
		setDisplayedDataCount(20);
	}, [formData.name]);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight
			) {
				setDisplayedDataCount(prevCount => prevCount + 20);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	let slicedData = filteredData?.slice(0, displayedDataCount);

	return (
		<>
			<NameButtonGroup />
			{isLoading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>An error occurred...</p>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full mt-4 table-auto">
						<thead>
							<tr>
								<th className="px-2 py-1 whitespace-nowrap">
									날짜
								</th>
								<th className="px-2 py-1 whitespace-nowrap">
									내용
								</th>
								<th className="px-2 py-1 whitespace-nowrap">
									금액
								</th>
								<th className="px-2 py-1 whitespace-nowrap">
									카테고리
								</th>
								<th className="px-2 py-1 whitespace-nowrap">
									결제수단
								</th>
								<th className="px-2 py-1 whitespace-nowrap">
									비고
								</th>
							</tr>
						</thead>
						<tbody>
							{slicedData?.map((row, index) => {
								const rowDate = convertToDate(Number(row[0]));
								const isFutureDate = rowDate > new Date();

								return (
									<tr
										key={index}
										className={`even:bg-gray-200 odd:bg-white${
											isFutureDate
												? ' text-slate-300'
												: ''
										}`}
									>
										<td className="px-2 py-1 whitespace-nowrap">
											{rowDate.toLocaleDateString()}
										</td>
										<td className="px-2 py-1 whitespace-nowrap">
											{row[1]
												.toString()
												.replace(/[\u0008]/g, '')}
										</td>
										<td className="px-2 py-1 whitespace-nowrap">
											{Number(row[2]).toLocaleString()}원
										</td>
										<td className="px-2 py-1 whitespace-nowrap">
											{row[3]}
										</td>
										<td className="px-2 py-1 whitespace-nowrap">
											{row[4]}
										</td>
										<td className="px-2 py-1 whitespace-nowrap">
											{row[5]?.replace(/[\u0008]/g, '')}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
};

export default MoneybookTable;
