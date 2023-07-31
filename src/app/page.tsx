'use client';

import { useState } from 'react';
import useFormStore, { Name } from '@/hooks/useFormStore';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import ButtonGroup from '@/components/ButtonGroup';
import CategorySelect from '@/components/CategorySelect';
import PaymentSelect from '@/components/PaymentSelect';
import SubmitButton from '@/components/SubmitButton';
import DateInput from '@/components/DateInput';

export default function Home() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin');
		},
	});

	const formData = useFormStore();

	const [isSubmitting, setIsSubmitting] = useState(false);

	const isFormIncomplete =
		!formData.name ||
		!formData.date ||
		!formData.content ||
		!formData.price ||
		!formData.category ||
		!formData.payment ||
		!formData.note;

	const onNameButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		formData.actions.setName(event.currentTarget.value as Name);
	};

	const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const priceValue = Number(e.target.value.replace(/,/g, ''));

		if (isNaN(priceValue)) {
			return;
		}

		formData.actions.setPrice(priceValue);
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isFormIncomplete || isSubmitting) {
			return;
		}

		setIsSubmitting(true);
		const sound = new Audio('/zelda_puzzle_solved.mp3');

		const { actions, ...data } = formData;
		const response = await fetch('/api/sheets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const responseData = await response.json();

		// 효과음 재생 주석처리
		// sound.play();
		setIsSubmitting(false);
	};

	return (
		<>
			<form className="space-y-6" onSubmit={onSubmit}>
				<ButtonGroup
					selectedName={formData.name}
					onNameButtonClick={onNameButtonClick}
				/>

				<DateInput
					value={formData.date as number}
					onChange={formData.actions.setDate}
				/>

				<div>
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700"
					>
						내용
					</label>
					<input
						required
						id="content"
						type="text"
						value={formData.content as string}
						onChange={e =>
							formData.actions.setContent(e.target.value)
						}
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
						required
						id="price"
						type="text"
						value={
							(formData.price as number) <= 0
								? ''
								: formData.price.toLocaleString()
						}
						onChange={onPriceChange}
						autoComplete="off"
						inputMode="numeric"
						className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					/>
				</div>
				<CategorySelect
					selectedCategory={formData.category as string}
					onCategoryChange={e =>
						formData.actions.setCategory(e.target.value)
					}
				/>
				<PaymentSelect
					selectedPayment={formData.payment as string}
					onPaymentChange={e =>
						formData.actions.setPayment(e.target.value)
					}
				/>
				<div>
					<label
						htmlFor="note"
						className="block text-sm font-medium text-gray-700"
					>
						비고
					</label>
					<input
						required
						id="note"
						type="text"
						value={formData.note as string}
						onChange={e => formData.actions.setNote(e.target.value)}
						className="block w-full px-4 py-2 mt-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
					/>
				</div>
				<SubmitButton
					isSubmitting={isSubmitting}
					isFormIncomplete={isFormIncomplete}
				>
					{isSubmitting ? '입력중...' : '입력'}
				</SubmitButton>
			</form>
		</>
	);
}
