'use client';

import { useState } from 'react';
import useFormStore, { Category, Name, Payment } from '@/hooks/useFormStore';
import NameButtonGroup from '@/components/NameButtonGroup';
import SubmitButton from '@/components/SubmitButton';
import DateInput from '@/components/DateInput';
import ContentInput from '@/components/ContentInput';
import PriceInput from '@/components/PriceInput';
import NoteInput from '@/components/NoteInput';
import CategoryButtonGroup from '@/components/CategoryButtonGroup';
import PaymentButtonGroup from '@/components/PaymentButtonGroup';

const SubmitForm: React.FC = () => {
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

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isFormIncomplete || isSubmitting) {
			return;
		}

		setIsSubmitting(true);

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
		// const sound = new Audio('/zelda_puzzle_solved.mp3');
		// sound.play();
		setIsSubmitting(false);
	};

	return (
		<>
			<form className="space-y-6" onSubmit={onSubmit}>
				<NameButtonGroup
					selectedName={formData.name}
					onNameButtonClick={onNameButtonClick}
				/>
				<DateInput
					value={formData.date as number}
					onChange={formData.actions.setDate}
				/>
				<ContentInput
					value={formData.content as string}
					onChange={formData.actions.setContent}
				/>
				<PriceInput
					value={formData.price as number}
					onChange={formData.actions.setPrice}
				/>
				<CategoryButtonGroup
					selectedCategory={formData.category as Category}
					onCategoryButtonClick={e =>
						formData.actions.setCategory(
							e.currentTarget.value as Category,
						)
					}
				/>
				<PaymentButtonGroup
					selectedPayment={formData.payment as Payment}
					onPaymentButtonClick={e =>
						formData.actions.setPayment(
							e.currentTarget.value as Payment,
						)
					}
				/>
				<NoteInput
					value={formData.note as string}
					onChange={formData.actions.setNote}
				/>
				<SubmitButton
					isSubmitting={isSubmitting}
					isFormIncomplete={isFormIncomplete}
				>
					{isSubmitting ? '입력중...' : '입력'}
				</SubmitButton>
			</form>
		</>
	);
};

export default SubmitForm;
