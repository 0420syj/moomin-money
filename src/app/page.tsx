'use client';

// src/app/page.tsx
import { useEffect, useState } from 'react';

export default function Page() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('/api/getdata')
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<div>
			<h1>Data from API:</h1>
			{data ? (
				<pre>{JSON.stringify(data, null, 2)}</pre>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
