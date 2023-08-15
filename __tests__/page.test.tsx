import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

beforeEach(() => {
	act(() => {
		render(<Home />);
	});
});

describe('Home Page', () => {
	it('renders without crashing', async () => {
		expect(await screen.findByText('🐶 빵떡')).toBeInTheDocument();
		expect(await screen.findByText('🐻‍❄️ 무민')).toBeInTheDocument();

		expect(await screen.findByText('날짜')).toBeInTheDocument();
		expect(await screen.findByText('내용')).toBeInTheDocument();
		expect(await screen.findByText('금액')).toBeInTheDocument();
		expect(await screen.findByText('카테고리')).toBeInTheDocument();
		expect(await screen.findByText('결제수단')).toBeInTheDocument();
		expect(await screen.findByText('비고')).toBeInTheDocument();

		expect(await screen.findByText('입력')).toBeInTheDocument();
	});

	it('should init 🐶 빵떡 as initial activated button', async () => {
		const activatedButton = await screen.findByText('🐶 빵떡');
		expect(activatedButton).toHaveClass('bg-[#024280]');
	});

	it('should init 🏠 주거 as initial category value', async () => {
		const category = await screen.findByLabelText('카테고리');
		expect(category).toHaveValue('🏠 주거');
	});

	it('should init 💳 신용카드 as initial payment value', async () => {
		const payment = await screen.findByLabelText('결제수단');
		expect(payment).toHaveValue('💳 신용카드');
	});

	it('should change active button by click deactivated button', async () => {
		const activatedButton = await screen.findByText('🐶 빵떡');
		const deactivatedButton = await screen.findByText('🐻‍❄️ 무민');

		await userEvent.click(deactivatedButton);

		expect(activatedButton).not.toHaveClass('bg-[#024280]');
		expect(deactivatedButton).toHaveClass('bg-[#024280]');
	});
});
