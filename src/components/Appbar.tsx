import React from 'react';
import SigninButton from './SigninButton';

const Appbar = () => {
	return (
		<header className="flex gap-4 p-4 shadow bg-gradient-to-b from-white to-gray-200">
			<SigninButton />
		</header>
	);
};

export default Appbar;
