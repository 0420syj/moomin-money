'use client';

import { SessionProvider } from 'next-auth/react';

interface Props {
	children: React.ReactNode;
}

const NextAuthProvider = (props: Props) => {
	return <SessionProvider>{props.children}</SessionProvider>;
};

export default NextAuthProvider;
