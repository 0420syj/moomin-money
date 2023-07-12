import { NextResponse } from 'next/server';
import { MONEYBOOK_DATA_SHEET_RANGE } from './constants';
import { GoogleSheetsService } from '@/services/GoogleSheetsService';

const googleSheetsService = new GoogleSheetsService();

export async function GET() {
	try {
		const values = await googleSheetsService.getSheetValues(
			process.env.GOOGLE_SPREADSHEET_ID as string,
			(process.env.GOOGLE_SHEET_NAME +
				'!' +
				MONEYBOOK_DATA_SHEET_RANGE) as string,
		);

		return NextResponse.json({ values });
	} catch (error) {
		console.error(error);
	}
}

export async function POST(request: Request) {
	try {
		const response = await googleSheetsService.postSheetValues(
			process.env.GOOGLE_SPREADSHEET_ID as string,
			(process.env.GOOGLE_SHEET_NAME +
				'!' +
				MONEYBOOK_DATA_SHEET_RANGE) as string,
			[
				[
					44652,
					'중개수수료',
					660000,
					'🏠 주거',
					'💵 현금',
					'바른 부동산',
				],
			],
		);

		return NextResponse.json(response);
	} catch (error) {
		console.error(error);
	}
}
