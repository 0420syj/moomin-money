import '@/app/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NextAuthProvider from '@/components/NextAuthProvider';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const metadata: Metadata = {
	title: '빵빚무 가계부',
	themeColor: '#024280',
	manifest: '/manifest.json',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen antialiased text-gray-800">
				<NextAuthProvider>
					<ReactQueryProvider>
						<Header />
						<main className="flex-grow px-4 py-5">{children}</main>
						<Analytics />
						<Footer />
					</ReactQueryProvider>
				</NextAuthProvider>
			</body>
		</html>
	);
};

export { metadata, RootLayout as default };
