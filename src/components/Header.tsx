import React from 'react';
import Image from 'next/image';
import SigninButton from './SigninButton';

const Header = () => {
	return (
		<header className="flex items-center justify-between w-full p-5 text-white bg-[#024280]">
			<nav className="flex items-center h-8">
				<ul className="flex items-center space-x-4">
					<li>
						<a href="/" className="hover:underline">
							<Image
								src="/favicon.ico"
								alt="logo"
								width={32}
								height={32}
								className="rounded-full"
								loading="lazy"
							/>
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
