import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const allowedAccounts = process.env.ALLOWED_ACCOUNTS?.split(',') ?? [];

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user }) {
			const isAllowedToSignIn = allowedAccounts.includes(
				user.email as string,
			);

			if (isAllowedToSignIn) {
				return true;
			} else {
				return false;
			}
		},
	},
});

export { handler as GET, handler as POST };
