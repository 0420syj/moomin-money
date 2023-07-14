import { convertToSerial } from '@/utils/date';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Name = 'wanny' | 'moomin';
export type Date = Number;
export type Content = String;
export type Price = String;
export type Category = String;
export type Payment = String;
export type Note = String;

type FormState = {
	name: Name;
	date: Date;
	content: Content;
	price: Price;
	category: Category;
	payment: Payment;
	note: Note;
};

type FormAction = {
	setName: (name: Name) => void;
	setDate: (date: Date) => void;
	setContent: (content: Content) => void;
	setPrice: (price: Price) => void;
	setCategory: (category: Category) => void;
	setPayment: (payment: Payment) => void;
	setNote: (note: Note) => void;

	getName: () => Name;
	getDate: () => Date;
	getContent: () => Content;
	getPrice: () => Price;
	getCategory: () => Category;
	getPayment: () => Payment;
	getNote: () => Note;

	reset: () => void;
};

type FormStore = FormState & {
	actions: FormAction;
};

// initial state
const initialState: FormState = {
	name: 'wanny',
	date: convertToSerial(new Date().toISOString().slice(0, 10)),
	content: '',
	price: '',
	category: '🏠 주거',
	payment: '💳 신용카드',
	note: '',
};

const useFormStore = create(
	devtools<FormStore>((set, get) => ({
		...initialState,
		actions: {
			setName: (name: Name) => set({ name }),
			setDate: (date: Date) => set({ date }),
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

			reset: () => set(initialState),
		},
	})),
);

export default useFormStore;
