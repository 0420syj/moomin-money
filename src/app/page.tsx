'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import SubmitForm from '@/components/SubmitForm';

export default function Home() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin');
		},
	});

	return (
		<>
			<SubmitForm />
		</>
	);
}
