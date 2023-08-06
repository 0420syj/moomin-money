import SubmitForm from '@/components/SubmitForm';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import MoneySpentBoard from '@/components/MoneySpentBoard';

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	return (
		<>
			{/* @ts-expect-error Server Component */}
			<MoneySpentBoard />
			<SubmitForm />
		</>
	);
}
