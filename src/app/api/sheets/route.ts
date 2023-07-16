import { NextResponse } from 'next/server';
import { MONEYBOOK_DATA_SHEET_RANGE } from './constants';
import { GoogleSheetsService } from '@/services/GoogleSheetsService';
import { FormState } from '@/hooks/useFormStore';

const googleSheetsService = new GoogleSheetsService();

const sheetNameMap = {
	// TODO : 보안상 임시적으로 주석처리
	// wanny: process.env.GOOGLE_WANNY_SHEET_NAME,
	// moomin: process.env.GOOGLE_MOOMIN_SHEET_NAME,
	wanny: process.env.GOOGLE_SHEET_NAME,
	moomin: process.env.GOOGLE_SHEET_NAME,
};

export async function POST(request: Request) {
	try {
		const formData: FormState = await request.json();

		const flatData = Object.entries(formData).reduce(
			(acc, [key, value]) =>
				key === 'name' ? acc : [...acc, value as string | number],
			[] as (string | number)[],
		);
		const valueData = Array.of(flatData);

		const response = await googleSheetsService.postSheetValues(
			process.env.GOOGLE_SPREADSHEET_ID as string,
			(sheetNameMap[formData.name] +
				'!' +
				MONEYBOOK_DATA_SHEET_RANGE) as string,
			valueData,
		);

		return NextResponse.json(response);
	} catch (error) {
		console.error(error);
	}
}
