'use client';

import useFormStore from '@/hooks/useFormStore';
import { formatDate, getSerial } from '@/utils/date';

export default function Home() {
	const formData = useFormStore();

	return (
		<div className="space-y-6">
			<div className="flex" role="group">
				<button
					type="button"
					value="wanny"
					className={`flex-1 px-4 py-2 text-sm font-medium border-t-2 border-b-2 border-l-2 border-r border-gray-200 rounded-l-lg ${
						formData.name === 'wanny'
							? 'bg-blue-500 text-white'
							: 'bg-white text-black hover:bg-gray-100'
					}`}
					onClick={() => formData.actions.setName('wanny')}
				>
					🐶 빵떡
				</button>
				<button
					type="button"
					value="moomin"
					className={`flex-1 px-4 py-2 text-sm font-medium border-t-2 border-b-2 border-l border-r-2 border-gray-200 rounded-r-lg ${
						formData.name === 'moomin'
							? 'bg-blue-500 text-white'
							: 'bg-white text-black hover:bg-gray-100'
					}`}
					onClick={() => formData.actions.setName('moomin')}
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
					value={formData.date as string}
					onChange={e => formData.actions.setDate(e.target.value)}
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
					value={formData.content as string}
					onChange={e => formData.actions.setContent(e.target.value)}
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
					type="number"
					value={formData.price as string}
					onChange={e => formData.actions.setPrice(e.target.value)}
					inputMode="numeric"
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					카테고리
				</label>
				<select
					id="category"
					value={formData.category as string}
					onChange={e => formData.actions.setCategory(e.target.value)}
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				>
					<option>🏠 주거</option>
					<option>🧺 생활</option>
					<option>🍎 식재료</option>
					<option>🍔 배달</option>
					<option>🍽️ 외식</option>
					<option>🍷 와인/술</option>
					<option>🏪 편의점</option>
					<option>🎠 문화/여가</option>
					<option>😺 냐옹</option>
					<option>🚗 교통</option>
					<option>✈️ 여행</option>
					<option>👔 옷/미용</option>
					<option>🏥 건강</option>
					<option>📚 자기개발</option>
					<option>❤️ 선물</option>
					<option>🪕 기타</option>
				</select>
			</div>
			<div>
				<label
					htmlFor="payment"
					className="block text-sm font-medium text-gray-700"
				>
					결제수단
				</label>
				<select
					id="payment"
					value={formData.payment as string}
					onChange={e => formData.actions.setPayment(e.target.value)}
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				>
					<option>💳 신용카드</option>
					<option>💵 현금</option>
					<option>💲 제로페이</option>
					<option>➗ 할부</option>
				</select>
			</div>
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
					value={formData.note as string}
					onChange={e => formData.actions.setNote(e.target.value)}
					className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				/>
			</div>
			<div>
				<button
					type="button"
					onClick={() => {
						const { actions, ...data } = formData;
						console.log(data);
					}}
					className="w-full py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
				>
					입력
				</button>
			</div>
		</div>
	);
}
