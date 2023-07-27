import React from 'react';
import SigninButton from './SigninButton';

const Header = () => {
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
							가계부
						</a>
					</li>
				</ul>
			</nav>
			<SigninButton />
		</header>
	);
};

export default Header;
