import { convertToSerial, getTodayDateString } from '@/utils/date';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const nameMap = {
	wanny: 'wanny',
	moomin: 'moomin',
} as const;

export const categoryMap = {
	House: '🏠 주거',
	Life: '🧺 생활',
	Groceries: '🍎 식재료',
	Delivery: '🍔 배달',
	DiningOut: '🍽️ 외식',
	WineAlcohol: '🍷 와인/술',
	ConvenienceStore: '🏪 편의점',
	CultureLeisure: '🎠 문화/여가',
	Cat: '😺 냐옹',
	Transportation: '🚗 교통',
	Travel: '✈️ 여행',
	ClothesBeauty: '👔 옷/미용',
	Health: '🏥 건강',
	SelfDevelopment: '📚 자기개발',
	Gift: '❤️ 선물',
	Etc: '🪕 기타',
} as const;

export const paymentMap = {
	CreditCard: '💳 신용카드',
	Cash: '💵 현금',
	ZeroPay: '💲 제로페이',
	Installment: '➗ 할부',
} as const;

export type Name = (typeof nameMap)[keyof typeof nameMap];
export type SerialDate = number;
export type Content = string;
export type Price = number;
export type Category = (typeof categoryMap)[keyof typeof categoryMap];
export type Payment = (typeof paymentMap)[keyof typeof paymentMap];
export type Note = string;

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

	isFormValid: () => boolean;

	// 현재 미사용
	reset: () => void;
};

type FormStore = FormState & {
	actions: FormAction;
};

const initialState: FormState = {
	name: 'wanny',
	date: convertToSerial(getTodayDateString()),
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

			isFormIncomplete: () => {
				const { name, date, content, price, category, payment, note } =
					get();
				return (
					!name ||
					!date ||
					!content ||
					!price ||
					!category ||
					!payment ||
					!note
				);
			},

			// 현재 미사용
			reset: () => set(initialState),
		},
	})),
);

export default useFormStore;
