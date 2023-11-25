import { Suspense } from 'react';
import MoneySpentBoardFallback from '@/components/MoneySpentBoardFallback';
import MoneySpentBoard from '@/components/MoneySpentBoard';
import SubmitForm from '@/components/SubmitForm';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      <Suspense fallback={<MoneySpentBoardFallback />}>
        <MoneySpentBoard />
      </Suspense>
      <SubmitForm />
    </>
  );
}
