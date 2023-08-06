import SubmitForm from '@/components/SubmitForm';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const fetchMoneySpent = async (range: string) => {
	const mainSheetName = process.env
		.NEXT_PUBLIC_GOOGLE_MAIN_SHEET_NAME as string;

	const host = process.env.NEXT_PUBLIC_HOST as string;

	const response = await fetch(
		`${host}/api/sheets/${mainSheetName}?range=${range}`,
	);
	const data = await response.json();
	return data.values[0][0];
};

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	const [wannyMoneySpent, moominMoneySpent, totalMoneySpent] =
		await Promise.all([
			fetchMoneySpent('C24'),
			fetchMoneySpent('C25'),
			fetchMoneySpent('C26'),
		]);

	return (
		<>
			<div className="flex flex-row justify-around mb-4">
				<div className="flex flex-col items-center">
					<div>🐶 빵떡</div>
					<div>₩{wannyMoneySpent.toLocaleString()}</div>
				</div>
				<div className="flex flex-col items-center">
					<div>💵 합계</div>
					<div>₩{totalMoneySpent.toLocaleString()}</div>
				</div>
				<div className="flex flex-col items-center">
					<div>🐻‍❄️ 무민</div>
					<div>₩{moominMoneySpent.toLocaleString()}</div>
				</div>
			</div>
			<SubmitForm />
		</>
	);
}
