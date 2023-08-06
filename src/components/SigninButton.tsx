import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function SigninButton() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	if (session && session.user) {
		return (
			<div className="flex h-8 gap-4 ml-auto">
				<Link
					href="/api/auth/signout"
					className="flex items-center hover:underline"
				>
					로그아웃
				</Link>
				<Image
					src={session.user.image ?? ''}
					alt={session.user.name ?? ''}
					width={32}
					height={32}
					className="rounded-full"
					loading="eager"
				/>
			</div>
		);
	}
	return (
		<>
			<Link
				href="/api/auth/signin"
				className="flex items-center hover:underline"
			>
				로그인
			</Link>
		</>
	);
}
