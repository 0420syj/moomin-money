import Link from 'next/link';

const Footer = () => {
	const googleSpreadSheetLink =
		process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_LINK ?? ('#' as string);

	return (
		<footer className="w-full p-4 mt-4 text-center bg-gray-200">
			<Link href="/" className="hover:underline">
				홈
			</Link>{' '}
			|{' '}
			<Link href="/moneybook" className="hover:underline">
				최근 2개월 소비
			</Link>{' '}
			|{' '}
			<Link
				href={googleSpreadSheetLink}
				target="_blank"
				className="hover:underline"
			>
				가계부 링크
			</Link>
			|{' '}
			<Link
				href="https://github.com/0420syj/moomin-money/issues/28"
				target="_blank"
				className="hover:underline"
			>
				개선요청
			</Link>
		</footer>
	);
};

export default Footer;
