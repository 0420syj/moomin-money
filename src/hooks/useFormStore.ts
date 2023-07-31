import { convertToSerial } from '@/utils/date';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Name = 'wanny' | 'moomin';
export type SerialDate = Number;
export type Content = String;
export type Price = Number;
export type Category = String; // TODO : enum
export type Payment = String; // TODO : enum
export type Note = String;

export type FormState = {
	name: Name;
	date: SerialDate;
	content: Content;
	price: Price;
	category: Category;
	payment: Payment;
	note: Note;
};

type FormAction = {
	setName: (name: Name) => void;
	setDate: (date: SerialDate) => void;
	setContent: (content: Content) => void;
	setPrice: (price: Price) => void;
	setCategory: (category: Category) => void;
	setPayment: (payment: Payment) => void;
	setNote: (note: Note) => void;

	getName: () => Name;
	getDate: () => SerialDate;
	getContent: () => Content;
	getPrice: () => Price;
	getCategory: () => Category;
	getPayment: () => Payment;
	getNote: () => Note;

	// 현재 미사용
	reset: () => void;
};

type FormStore = FormState & {
	actions: FormAction;
};

const initialState: FormState = {
	name: 'wanny',
	date: convertToSerial(new Date().toISOString().slice(0, 10)),
	content: '',
	price: 0,
	category: '🏠 주거',
	payment: '💳 신용카드',
	note: '',
};

const useFormStore = create(
	devtools<FormStore>((set, get) => ({
		...initialState,
		actions: {
			setName: (name: Name) => set({ name }),
			setDate: (date: SerialDate) => set({ date }),
			setContent: (content: Content) => set({ content }),
			setPrice: (price: Price) => set({ price }),
			setCategory: (category: Category) => set({ category }),
			setPayment: (payment: Payment) => set({ payment }),
			setNote: (note: Note) => set({ note }),

			getName: () => get().name,
			getDate: () => get().date,
			getContent: () => get().content,
			getPrice: () => get().price,
			getCategory: () => get().category,
			getPayment: () => get().payment,
			getNote: () => get().note,

			// 현재 미사용
			reset: () => set(initialState),
		},
	})),
);

export default useFormStore;
