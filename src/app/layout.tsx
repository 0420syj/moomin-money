import '@/app/globals.css';
import Appbar from '@/components/Appbar';
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
					<header className="flex justify-between w-full p-5 text-white bg-blue-500">
						<nav>
							<ul className="flex space-x-4">
								<li>
									<a href="/" className="hover:underline">
										홈
									</a>
								</li>
								<li>
									<a
										href="/moneybook"
										className="hover:underline"
									>
										가계부
									</a>
								</li>
							</ul>
						</nav>
					</header>
					<Appbar />
					<main className="flex-grow px-4 py-5">{children}</main>
					<footer className="w-full p-4 mt-4 text-center bg-gray-200">
						<p>
							<a href="/" className="hover:underline">
								홈
							</a>{' '}
							|{' '}
							<a href="/moneybook" className="hover:underline">
								가계부
							</a>
						</p>
					</footer>
				</Providers>
			</body>
		</html>
	);
};

export { metadata, RootLayout as default };
