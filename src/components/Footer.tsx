const Footer = () => {
	const googleSpreadSheetLink =
		process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_LINK ?? ('#' as string);

	return (
		<footer className="w-full p-4 mt-4 text-center bg-gray-200">
			<p>
				<a href="/" className="hover:underline">
					홈
				</a>{' '}
				|{' '}
				<a href="/moneybook" className="hover:underline">
					이번달 소비
				</a>{' '}
				|{' '}
				<a
					href={googleSpreadSheetLink}
					target="_blank"
					className="hover:underline"
				>
					가계부 링크
				</a>
				|{' '}
				<a
					href="https://github.com/0420syj/moomin-money/issues/28"
					target="_blank"
					className="hover:underline"
				>
					개선요청
				</a>
			</p>
		</footer>
	);
};

export default Footer;
