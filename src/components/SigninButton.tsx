'use client';

import React from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const SigninButton = () => {
	const { data: session } = useSession();

	if (session && session.user) {
		return (
			<div className="flex h-8 gap-4 ml-auto">
				<button onClick={() => signOut()} className="text-white">
					로그아웃
				</button>
				<Image
					src={session.user.image ?? ''}
					alt={session.user.name ?? ''}
					width={32}
					height={32}
					className="rounded-full"
					loading="lazy"
				/>
			</div>
		);
	}
	return (
		<button onClick={() => signIn()} className="ml-auto text-white">
			로그인
		</button>
	);
};

export default SigninButton;
