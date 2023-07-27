const Footer = () => {
	return (
		<footer className="w-full p-4 mt-4 text-center bg-gray-200">
			<p>
				<a href="/" className="hover:underline">
					홈
				</a>{' '}
				|{' '}
				<a href="/moneybook" className="hover:underline">
					가계부
				</a>
			</p>
		</footer>
	);
};

export default Footer;
