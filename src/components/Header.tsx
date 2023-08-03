import React from 'react';
import SigninButton from './SigninButton';

const Header = () => {
	const googleSpreadSheetLink =
		process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_LINK ?? ('#' as string);

	return (
		<header className="flex items-center justify-between w-full p-5 text-white bg-blue-500">
			<nav className="flex items-center h-8">
				<ul className="flex space-x-4">
					<li>
						<a href="/" className="hover:underline">
							홈
						</a>
					</li>
					<li>
						<a href="/moneybook" className="hover:underline">
							이번달 소비
						</a>
					</li>
				</ul>
			</nav>
			<SigninButton />
		</header>
	);
};

export default Header;
