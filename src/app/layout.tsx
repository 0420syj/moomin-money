import '@/app/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from '@/components/Providers';
import { Metadata } from 'next';

const metadata: Metadata = {
	title: '빵빚무 가계부',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen antialiased text-gray-800">
				<Providers>
					<Header />
					<main className="flex-grow px-4 py-5">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export { metadata, RootLayout as default };
