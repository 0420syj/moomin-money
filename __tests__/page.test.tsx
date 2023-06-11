import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
	beforeEach(() => {
		render(<Home />);
	});

	test('renders Home component', () => {
		expect(screen.getByText('Next.js + Storybook')).toBeInTheDocument();
	});

	test('renders Vercel Logo', () => {
		expect(screen.getByAltText('Vercel Logo')).toBeInTheDocument();
	});

	test('renders Vercel Logo with width 72', () => {
		expect(screen.getByAltText('Vercel Logo')).toHaveAttribute(
			'width',
			'72',
		);
	});

	test('renders Vercel Logo with height 16', () => {
		expect(screen.getByAltText('Vercel Logo')).toHaveAttribute(
			'height',
			'16',
		);
	});
});
