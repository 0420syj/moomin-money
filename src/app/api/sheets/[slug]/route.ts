import { NextResponse } from 'next/server';
import { GoogleSheetsService } from '@/services/GoogleSheetsService';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const googleSheetsService = new GoogleSheetsService();

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/api/auth/signin');
	}

	try {
		const slug = params.slug;

		const { searchParams } = new URL(request.url);
		const range = searchParams.get('range');

		const values = await googleSheetsService.getSheetValues(
			process.env.GOOGLE_SPREADSHEET_ID as string,
			(slug + '!' + (range ?? process.env.GOOGLE_SHEET_RANGE)) as string,
		);

		return NextResponse.json({ values });
	} catch (error) {
		console.error(error);
	}
}
