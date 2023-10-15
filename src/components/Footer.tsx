import Link from 'next/link';

const Footer = () => {
	const googleSpreadSheetLink =
		process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_LINK ?? ('#' as string);

	return (
		<footer className="flex flex-row justify-center w-full gap-2 p-4 mt-4 bg-gray-200">
			<Link href="/" className="hover:underline">
				홈
			</Link>
			<span>|</span>
			<Link href="/moneybook" className="hover:underline">
				소비내역
			</Link>
			<span>|</span>
			<Link
				href={googleSpreadSheetLink}
				target="_blank"
				className="hover:underline"
			>
				가계부 링크
			</Link>
			<span>|</span>
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
