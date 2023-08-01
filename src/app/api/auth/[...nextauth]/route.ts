import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const allowedAccounts = process.env.ALLOWED_ACCOUNTS?.split(',') ?? [];

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
		async signIn({ user }: { user: any }) {
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
