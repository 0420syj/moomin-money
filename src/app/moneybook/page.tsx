import { redirect } from 'next/navigation';
import MoneybookTable from '@/components/MoneybookTable';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Page() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	return <MoneybookTable />;
}
