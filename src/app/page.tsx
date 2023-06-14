'use client';

import { useState } from 'react';

export default function Home() {
	const [selected, setSelected] = useState('wanny');

	return (
		<form className="space-y-6">
			<div className="flex" role="group">
				<button
					type="button"
					className={`flex-1 px-4 py-2 text-sm font-medium text-gray-900 border-t-2 border-b-2 border-l-2 border-r border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ${
						selected === 'wanny'
							? 'bg-blue-500 text-white'
							: 'bg-white'
					}`}
					onClick={() => setSelected('wanny')}
				>
					🐶 빵떡
				</button>
				<button
					type="button"
					className={`flex-1 px-4 py-2 text-sm font-medium text-gray-900 border-t-2 border-b-2 border-l border-r-2 border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ${
						selected === 'moomin'
							? 'bg-blue-500 text-white'
							: 'bg-white'
					}`}
					onClick={() => setSelected('moomin')}
				>
					🐻‍❄️ 무민
				</button>
			</div>

			<div>
				<label
					htmlFor="date"
					className="block text-sm font-medium text-gray-700"
				>
					날짜
				</label>
				<input
					id="date"
					type="date"
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<label
					htmlFor="content"
					className="block text-sm font-medium text-gray-700"
				>
					내용
				</label>
				<input
					id="content"
					type="text"
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<label
					htmlFor="price"
					className="block text-sm font-medium text-gray-700"
				>
					금액
				</label>
				<input
					id="price"
					type="text"
					inputMode="numeric"
					pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
					data-type="currency"
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			{/* Add your categories and payment methods here */}
			<div>
				<label
					htmlFor="note"
					className="block text-sm font-medium text-gray-700"
				>
					비고
				</label>
				<input
					id="note"
					type="text"
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<button
					type="submit"
					className="w-full py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
				>
					입력
				</button>
			</div>
		</form>
	);
}
