'use client';

import { useEffect, useState } from 'react';
import useFormStore from '@/hooks/useFormStore';
import NameButtonGroup from '@/components/NameButtonGroup';
import SubmitButton from '@/components/SubmitButton';
import DateInput from '@/components/DateInput';
import ContentInput from '@/components/ContentInput';
import PriceInput from '@/components/PriceInput';
import NoteInput from '@/components/NoteInput';
import CategoryButtonGroup from '@/components/CategoryButtonGroup';
import PaymentButtonGroup from '@/components/PaymentButtonGroup';
import { useSession } from 'next-auth/react';

const allowedAccounts =
	process.env.NEXT_PUBLIC_ALLOWED_ACCOUNTS?.split(',') ?? [];

const SubmitForm: React.FC = () => {
	const formData = useFormStore();
	const [submitButtonText, setSubmitButtonText] = useState('입력');

	const { data: session } = useSession();

	useEffect(() => {
		if (session && session.user) {
			const { email } = session.user;
			if (email === allowedAccounts[0]) {
				formData.actions.setName('wanny');
			} else if (email === allowedAccounts[1]) {
				formData.actions.setName('moomin');
			}
		}
	}, [session]);

	const [isSubmitting, setIsSubmitting] = useState(false);

	const isFormIncomplete =
		!formData.name ||
		!formData.date ||
		!formData.content ||
		!formData.price ||
		!formData.category ||
		!formData.payment ||
		!formData.note;

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isFormIncomplete || isSubmitting) {
			return;
		}

		setIsSubmitting(true);
		setSubmitButtonText('입력중...');

		const { actions, ...data } = formData;
		try {
			const response = await fetch('/api/sheets', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const responseData = await response.json();
			if (responseData.length) {
				setSubmitButtonText('입력완료!');
				// 성공시 짧고 세게 진동
				if (navigator.vibrate) {
					navigator.vibrate([100, 50, 100]);
				}
			}
		} catch (error) {
			console.error(error);
			setSubmitButtonText('입력실패!');
			// 실패시 길고 약하게 진동
			if (navigator.vibrate) {
				navigator.vibrate([300, 100, 300, 100, 300]);
			}
		} finally {
			setTimeout(() => {
				setSubmitButtonText('입력');
				if (navigator.vibrate) {
					navigator.vibrate(50);
				}
			}, 1500);
		}

		// 효과음 재생 주석처리
		// const sound = new Audio('/zelda_puzzle_solved.mp3');
		// sound.play();
		setIsSubmitting(false);
	};

	return (
		<>
			<form className="space-y-6" onSubmit={onSubmit}>
				<NameButtonGroup />
				<DateInput />
				<ContentInput />
				<PriceInput />
				<CategoryButtonGroup />
				<PaymentButtonGroup />
				<NoteInput />
				<SubmitButton
					isSubmitting={isSubmitting}
					isFormIncomplete={isFormIncomplete}
				>
					{submitButtonText}
				</SubmitButton>
			</form>
		</>
	);
};

export default SubmitForm;
