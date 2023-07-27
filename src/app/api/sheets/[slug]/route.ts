import { NextResponse } from 'next/server';
import { GoogleSheetsService } from '@/services/GoogleSheetsService';

const googleSheetsService = new GoogleSheetsService();

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	try {
		const slug = params.slug;

		const values = await googleSheetsService.getSheetValues(
			process.env.GOOGLE_SPREADSHEET_ID as string,
			(slug + '!' + process.env.GOOGLE_SHEET_RANGE) as string,
		);

		return NextResponse.json({ values });
	} catch (error) {
		console.error(error);
	}
}
