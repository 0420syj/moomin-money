import { create } from 'zustand';

const store = set => ({
	input: 
		{
			name: 'name 입니다',
			email: '이메일입니다',
			password: '132',
			password2: '1322',
		},
	,
});

export const useStore = create(store);
