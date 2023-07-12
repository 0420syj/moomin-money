import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type FormState = {
	// 결제한 사람
	name: String;
	date: String;
	content: String;
	price: String;
	category: String;
	payment: String;
	note: String;
};

type FormAction = {
	setName: (name: String) => void;
	setDate: (date: String) => void;
	setContent: (content: String) => void;
	setPrice: (price: String) => void;
	setCategory: (category: String) => void;
	setPayment: (payment: String) => void;
	setNote: (note: String) => void;
	getName: () => String;
	getDate: () => String;
	getContent: () => String;
	getPrice: () => String;
	getCategory: () => String;
	getPayment: () => String;
	getNote: () => String;
};

type FormStore = FormState & {
	actions: FormAction;
};

const useFormStore = create(
	devtools<FormStore>((set, get) => ({
		name: 'wanny',
		date: new Date().toISOString().slice(0, 10),
		content: '',
		price: '0',
		category: '',
		payment: '',
		note: '',
		actions: {
			setName: (name: String) => set({ name }),
			setDate: (date: String) => set({ date }),
			setContent: (content: String) => set({ content }),
			setPrice: (price: String) => set({ price }),
			setCategory: (category: String) => set({ category }),
			setPayment: (payment: String) => set({ payment }),
			setNote: (note: String) => set({ note }),
			getName: () => get().name,
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
