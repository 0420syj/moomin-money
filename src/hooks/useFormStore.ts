import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type FormState = {
	date: String;
	content: String;
	price: Number;
	category: String;
	payment: String;
	note: String;
};

type FormAction = {
	setDate: (date: String) => void;
	setContent: (content: String) => void;
	setPrice: (price: Number) => void;
	setCategory: (category: String) => void;
	setPayment: (payment: String) => void;
	setNote: (note: String) => void;

	getDate: () => String;
	getContent: () => String;
	getPrice: () => Number;
	getCategory: () => String;
	getPayment: () => String;
	getNote: () => String;
};

type FormStore = FormState & {
	actions: FormAction;
};

const useFormStore = create(
	devtools<FormStore>((set, get) => ({
		date: '',
		content: '',
		price: 0,
		category: '',
		payment: '',
		note: '',
		actions: {
			setDate: (date: String) => set({ date }),
			setContent: (content: String) => set({ content }),
			setPrice: (price: Number) => set({ price }),
			setCategory: (category: String) => set({ category }),
			setPayment: (payment: String) => set({ payment }),
			setNote: (note: String) => set({ note }),
			getDate: () => get().date,
			getContent: () => get().content,
			getPrice: () => get().price,
			getCategory: () => get().category,
			getPayment: () => get().payment,
			getNote: () => get().note,
		},
	})),
);

export default useFormStore;
