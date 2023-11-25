'use client';

import { useState } from 'react';
import useFormStore from '@/hooks/useFormStore';
import NameButtonGroup from '@/components/NameButtonGroup';
import SubmitButton from '@/components/SubmitButton';
import DateInput from '@/components/DateInput';
import ContentInput from '@/components/ContentInput';
import PriceInput from '@/components/PriceInput';
import NoteInput from '@/components/NoteInput';
import CategoryButtonGroup from '@/components/CategoryButtonGroup';
import PaymentButtonGroup from '@/components/PaymentButtonGroup';
import { DatePickerDemo } from './DatePicker';

const SubmitForm: React.FC = () => {
  const {
    isFormIncomplete,

    getName,
    getDate,
    getContent,
    getPrice,
    getNote,
    getCategory,
    getPayment,
  } = useFormStore(state => ({
    isFormIncomplete: state.actions.isFormIncomplete,

    getName: state.actions.getName,
    getDate: state.actions.getDate,
    getContent: state.actions.getContent,
    getPrice: state.actions.getPrice,
    getNote: state.actions.getNote,
    getCategory: state.actions.getCategory,
    getPayment: state.actions.getPayment,
  }));

  const [submitButtonText, setSubmitButtonText] = useState('입력');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormIncomplete() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitButtonText('입력중...');

    const data = {
      name: getName(),
      date: getDate(),
      content: getContent(),
      price: getPrice(),
      category: getCategory(),
      payment: getPayment(),
      note: getNote(),
    };

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
      <form className="space-y-4" onSubmit={onSubmit}>
        <DatePickerDemo />
        <NameButtonGroup />
        <DateInput />
        <ContentInput />
        <PriceInput />
        <CategoryButtonGroup />
        <PaymentButtonGroup />
        <NoteInput />
        <SubmitButton isSubmitting={isSubmitting}>{submitButtonText}</SubmitButton>
      </form>
    </>
  );
};

export default SubmitForm;
