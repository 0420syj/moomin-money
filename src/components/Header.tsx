import React from 'react';
import SigninButton from './SigninButton';

const Header = () => {
	const googleSpreadSheetLink =
		process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_LINK ?? ('#' as string);

	return (
		<header className="flex justify-between w-full p-5 text-white bg-blue-500">
			<nav>
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
					<li>
						<a
							href={googleSpreadSheetLink}
							target="_blank"
							className="hover:underline"
						>
							가계부 링크
						</a>
					</li>
					<li>
						<a
							href="https://github.com/0420syj/moomin-money/issues/28"
							target="_blank"
							className="hover:underline"
						>
							개선요청
						</a>
					</li>
				</ul>
			</nav>
			<SigninButton />
		</header>
	);
};

export default Header;
