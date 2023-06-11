import { NextResponse } from 'next/server';
import { MONEYBOOK_DATA_SHEET_RANGE } from '../constants';
import { GoogleSheetsService } from '@/app/services/GoogleSheetsService';

const googleSheetsService = new GoogleSheetsService();

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	try {
		const slug = params.slug;

		const values = await googleSheetsService.getSheetValues(
			process.env.GOOGLE_SPREADSHEET_ID as string,
			(slug + '!' + MONEYBOOK_DATA_SHEET_RANGE) as string,
		);

		for (let i = 0; i < 3; i++) {
			console.log(values[i]);
		}

		return NextResponse.json({ values });
	} catch (error) {
		console.error(error);
	}
}
