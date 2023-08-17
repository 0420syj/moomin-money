'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PropsWithChildren } from 'react';

const ReactQueryProvider = ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default ReactQueryProvider;
